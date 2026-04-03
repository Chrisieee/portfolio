import {createContext, useContext, useState} from "react";
import {useTranslation} from "react-i18next";

const LanguageContext = createContext()

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState("NL")
    const {i18n} = useTranslation();

    function languageChange() {
        if (language === "NL") {
            setLanguage("EN")
            i18n.changeLanguage("en")
        } else {
            setLanguage("NL")
            i18n.changeLanguage("nl")
        }
    }

    return (
        <LanguageContext.Provider value={{
            language, languageChange,
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}