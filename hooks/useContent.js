import { useRouter } from "next/router";

import en from "../intl/en-us.json";
import ru from "../intl/ru-ru.json";

const LOCALES = {
  "en-us": en,
  "ru-ru": ru,
  default: en,
};

const useContent = () => {
  const { locale } = useRouter();

  return LOCALES[locale] || LOCALES.default;
};

export default useContent;
