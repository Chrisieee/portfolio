import {createContext, useContext, useState} from "react";
import {useAbout} from "./AboutContext.jsx";
import {useHome} from "./HomeContext.jsx";
import {useProjects} from "./ProjectsContext.jsx";

const LanguageContext = createContext()

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState("NL")
    const {homeNL, homeEN, setHome} = useHome()
    const {aboutNL, aboutEN, setAbout} = useAbout()
    const {projectNL, projectEN, setProject} = useProjects()

    function languageChange() {
        if (language === "NL") {
            setLanguage("EN")
            setHome(homeEN)
            setAbout(aboutEN)
            setProject(projectEN)
        } else {
            setLanguage("NL")
            setHome(homeNL)
            setAbout(aboutNL)
            setProject(projectNL)
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