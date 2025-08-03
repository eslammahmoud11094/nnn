// utils/translations.js
import ar from "@/public/locales/ar/common.json";
import en from "@/public/locales/en/common.json";

export const getTranslations = (locale) => {
  return locale === "ar" ? ar : en;
};
