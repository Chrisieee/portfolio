import {createContext, useContext, useState} from "react";

const LanguageContext = createContext()

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState("NL")

    const homeNL = {
        quote: "Je leert het meest als je uit je comfort zone stapt.",
        quoteInfo: "Uitdaging aangaan vind ik het engst en het leukst om te doen. Je leert er een hoop van als je\n" +
            "                    nieuwe dingen probeert.",
        projects: "Uitgelichte projecten:",
        contact1: "Vragen?",
        contact2: "Neem contact op:",
        bio: "Wie is Christa",
        bioInfo: "Ik ben Christa, 25 jaar oud en ik studeer Creatieve Media & Game Technologies. Het leukste vind\n" +
            "ik het kunnen uitwerken van de creatieve ideeën die ik heb in iets wat technisch ook werkt.\n" +
            "Programmeren is grotendeels logisch nadenken en ik vind het erg leuk om uiteindelijk het\n" +
            "eind resultaat te kunnen bekijken en te bedenken dat het me gewoon gelukt is. Met elk project\n" +
            "probeer ik nieuwe dingen uit en ontdek ik mezelf verder."
    }
    const homeEN = {
        quote: "You learn a lot when you come out of your comfort zone.",
        quoteInfo: "Taking on challenges is one of the scariest and funnest things to do in my opinion. You can learn a lot from trying new things.",
        projects: "Highlighted projects:",
        contact1: "Questions?",
        contact2: "Please contact me:",
        bio: "Who is Christa",
        bioInfo: "I am Christa, 25 years old and I studie Creatieve Media & Game Technologies. The thing I love the most is the fact I can create my creative ideas and bring them to life with programing. Programming contains a lot of logical thinking and I love to look and the end result and think I did this. With every project I try to reinvent myself and try new things."
    }
    const [home, setHome] = useState(homeNL)

    const aboutNL = {
        bio: "Wie is Christa",
        bioInfo: "Ik ben Christa, 25 jaar oud en ik studeer Creatieve Media & Game Technologies. Het leukste vind\n" +
            "ik het kunnen uitwerken van de creatieve ideeën die ik heb in iets wat technisch ook werkt.\n" +
            "Programmeren is grotendeels logisch nadenken en ik vind het erg leuk om uiteindelijk het\n" +
            "eind resultaat te kunnen bekijken en te bedenken dat het me gewoon gelukt is. Met elk project\n" +
            "probeer ik nieuwe dingen uit en ontdek ik mezelf verder.",
        hobby: "Vrije tijd",
        hobbyInfo: "In mijn vrije tijd vind ik het super leuk om creatief bezig te zijn. Ik ben altijd wel bezig met\n" +
            "een projectje denk hierbij aan foto's maken, designen, video's maken of programmeer\n" +
            "projectjes. Ik houd ervan om mooie dingen te maken en mezelf uit te dagen met verschillende\n" +
            "dingen.",
        stage: "Stage",
        stageInfo: "Op een stage zou ik mezelf willen uitdagen om dingen te proberen en maken die ik nog nooit heb\n" +
            "gedaan. Graag wil ik ontdekken wat er allemaal mogelijk is op het gebied van programmeren. Ik\n" +
            "heb een lichte voorkeur voor front-end, omdat ik de visuele feedback die je hierbij krijgt heel\n" +
            "fijn vind. Maar ik vind het ook leuk om te ontdekken wat er nog meer is.",
        experience: "Ervaring",
        basic: "Basis",
        cv: "NL"
    }
    const aboutEN = {
        bio: "Who is Christa",
        bioInfo: "I am Christa, 25 years old and I studie Creatieve Media & Game Technologies. The thing I love the most is the fact I can create my creative ideas and bring them to life with programing. Programming contains a lot of logical thinking and I love to look and the end result and think I did this. With every project I try to reinvent myself and try new things.",
        hobby: "Spare time",
        hobbyInfo: "In my spare time I enjoy being creative. I am always working on a project think of making photos. designing, creating videos or programming projects. I love to create nice things and challenging myself with different things.",
        stage: "Internship",
        stageInfo: "On my internship I want to challenge myself with trying things I have never done. I want to explore the possibilities of programming. I have a mild preference for front-end because I love the visual feedback you get. But I love to explore different aspects of programming as well.",
        experience: "Experience",
        basic: "Basic",
        cv: "Dutch"
    }
    const [about, setAbout] = useState(aboutNL)

    function languageChange() {
        if (language === "NL") {
            setLanguage("EN")
            setHome(homeEN)
            setAbout(aboutEN)
        } else {
            setLanguage("NL")
            setHome(homeNL)
            setAbout(aboutNL)
        }
    }

    return (
        <LanguageContext.Provider value={{
            homeNL, homeEN, home, setHome,
            aboutNL, aboutEN, about, setAbout,
            language, languageChange,
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}