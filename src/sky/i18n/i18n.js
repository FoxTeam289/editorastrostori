/** @format */

import en from "../i18n/en.json";
import ru from "../i18n/ru.json";

export const i18n = (lang) => {
  switch (lang) {
    case "en":
      return en;
      break;
    case "ru":
      return ru;
      break;
    default:
      return en;
  }
};
