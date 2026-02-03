import {createContext, useContext, useState} from "react";

const HomeContext = createContext()

export function HomeProvider({children}) {
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

    return (
        <HomeContext.Provider value={{
            homeNL, homeEN, home, setHome,
        }}>
            {children}
        </HomeContext.Provider>
    )
}

export function useHome() {
    return useContext(HomeContext)
}