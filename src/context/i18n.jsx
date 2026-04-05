import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../languages/en/translation.json";
import nl from "../languages/nl/translation.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "nl",
        debug: true,

        resources: {
            en: {translation: en},
            nl: {translation: nl}
        },

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;