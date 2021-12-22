import React, { useMemo, useState } from "react"

import { Modal, ModalBody, ModalButton } from "src/uikit/Modal"
import { InputComponent } from "src/uikit/Input"
import { Textarea } from "src/uikit"
import { ErrorContainer, Error } from "src/uikit/Input/Input"
import SuccessModal from "src/common/SuccessModal"
import { createSubmit } from "src/common/hubspot"

import { Title, FormContainer, SuccessText } from "./styled"

const fields = ["email", "code"]

const ContactSalesModal = ({ isOpen, content, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [status, setStatus] = useState(0)

  const [form, setForm] = useState({
    code: "",
    email: "",
    errors: {},
  })

  const submit = useMemo(
    () =>
      createSubmit({
        portalId: content.portalId,
        formId: content.formId,
        isDetectPage: false,
      }),
    [content]
  )

  const handleChangeInput = e => {
    const { id, value } = e.target
    const newForm = { ...form, [id]: value }

    setForm(newForm)

    setIsDisabled(() => {
      for (let field of fields) {
        if ((field === id && !value) || !newForm[field]) {
          return true
        }
      }

      return false
    })
  }

  const handleClose = () => {
    setStatus(0)
    onClose()
  }

  const handleSubmit = async () => {
    const errors = {}

    fields.forEach(field => {
      const value = form[field]
      if (value.trim() === "") {
        errors[field] = content.errorEmpty

        return
      }
    })

    if (Object.keys(errors).length > 0) {
      setForm({
        ...form,
        errors,
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await submit(fields, form)

      if (result.status === 200) {
        setStatus(1)
      }
    } catch (err) {
      const hubSpotErrors = {}

      err.response?.data?.errors?.forEach(({ errorType }) => {
        if (errorType === "INVALID_EMAIL") {
          hubSpotErrors.email = content.errorEmail
        }
      })

      setForm(prevValue => ({ ...prevValue, errors: hubSpotErrors }))
    }

    setIsLoading(false)
  }

  if (status === 0) {
    const { errors } = form

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody>
          <Title>{content.title}</Title>
          <FormContainer>
            {fields.map(field =>
              field === "code" ? (
                <div key={field} className="message-field">
                  <label htmlFor={field}>{content[field]}</label>
                  <Textarea
                    key={field}
                    isValid={errors[field] === undefined}
                    id={field}
                    error={errors[field]}
                    value={form[field]}
                    onChange={handleChangeInput}
                  />
                  <ErrorContainer>
                    {!!errors[field] && <Error>{errors[field]}</Error>}
                  </ErrorContainer>
                </div>
              ) : (
                <InputComponent
                  key={field}
                  isValid={errors[field] === undefined}
                  type={field === "email" ? "email" : "text"}
                  label={content[field]}
                  id={field}
                  error={errors[field]}
                  isRequired={false}
                  value={form[field]}
                  onChange={handleChangeInput}
                />
              )
            )}
          </FormContainer>
          <ModalButton
            color="purple"
            disabled={isDisabled || isLoading}
            onClick={handleSubmit}
          >
            {content.submitButton}
          </ModalButton>
        </ModalBody>
        <ModalButton
          color="purple"
          disabled={isDisabled || isLoading}
          onClick={handleSubmit}
        >
          {content.submitButton}
        </ModalButton>
      </Modal>
    )
  }

  return (
    <SuccessModal
      title=""
      body={
        <SuccessText>
          <h1>{content.successTitle}</h1>
          <p>{content.successText}</p>
        </SuccessText>
      }
      closeButton={content.successCloseButton}
      isOpen={isOpen}
      toggle={handleClose}
    />
  )
}

export default ContactSalesModal
