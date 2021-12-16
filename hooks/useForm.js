import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const createSubmit = ({ portalId, formId, isDetectPage = true }) => {
  return async (fieldsNames, fieldsValues) => {
    const url = window ? window.location.href : "";
    const pageName = url ? url.split("/").slice(-1)[0] || "Main" : "Main";

    const data = {
      submittedAt: +new Date(),
      fields: isDetectPage ? [{ name: "url", value: url }] : [],
      skipValidation: false,
    };

    fieldsNames.forEach((name) => {
      data.fields.push({
        name,
        value: fieldsValues[name],
      });
    });

    data.context = {
      pageUri: url,
      pageName,
      pageId: pageName,
    };

    const result = await axios({
      method: "POST",
      url: `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      data,
      headers: { "Content-Type": "application/json" },
    });

    return result;
  };
};

const useForm = ({
  fields = [],
  portalId,
  formId,
  errorEmptyField = "",
  errorPhoneField = "",
  errorEmailField = "",
  onSuccess = () => {},
  onFailure = () => {},
}) => {
  const [form, setForm] = useState({ errors: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const newForm = {};

    fields.forEach((field) => {
      newForm[field] = "";
    });

    setForm((prevValue) => ({ ...newForm, ...prevValue }));
  }, [fields, setForm]);

  const handleChangeInput = (e) => {
    const { id, value } = e.target;

    setForm((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));

    setIsDisabled(
      fields.every((field) => (field === id ? !value : !form[field]))
    );
  };

  const submit = useMemo(
    () =>
      createSubmit({
        portalId,
        formId,
      }),
    [portalId, formId]
  );

  const handleSubmit = async () => {
    const errors = {};
    fields.forEach((field) => {
      const value = form[field];

      if (value.trim() === "") {
        errors[field] = errorEmptyField;

        return;
      }
    });

    if (Object.keys(errors).length > 0) {
      setForm((prevValue) => ({
        ...prevValue,
        errors,
      }));

      return;
    }

    setIsLoading(true);

    try {
      const result = await submit(fields, form);

      if (result.status === 200) {
        onSuccess();
      }
    } catch (err) {
      const hubSpotErrors = {};

      err.response?.data.errors.forEach(({ errorType }) => {
        if (errorType === "NUMBER_OUT_OF_RANGE") {
          hubSpotErrors.phone = errorPhoneField;
        }

        if (errorType === "INVALID_EMAIL") {
          hubSpotErrors.email = errorEmailField;
        }
      });

      setForm((prevValue) => ({ ...prevValue, errors: hubSpotErrors }));
      onFailure();
    }

    setIsLoading(false);
  };

  return {
    form,
    isLoading,
    isDisabled,
    onChange: handleChangeInput,
    onSubmit: handleSubmit,
  };
};

export default useForm;
