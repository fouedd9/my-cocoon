import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./locales/fr.json";
import en from "./locales/en.json";
import de from "./locales/de.json";

const savedLanguage = localStorage.getItem("menu-language") || "fr";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: fr,
    },
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
  },

  lng: savedLanguage,
  fallbackLng: "fr",

  supportedLngs: ["fr", "en", "de"],

  keySeparator: false,
  nsSeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
