import {useAnimate} from "../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {H2} from "../components/headings.jsx";
import {
    AdvocaderaserCard,
    GamereviewsCard,
    SignatuurCard,
    TrippieCard,
    StagelinkCard
} from "../components/schoolProjects.jsx";
import {AdvoCard, AudioCard, DiscordbotCard} from "../components/funProjects.jsx";
import {useEffect} from "react";
import {useLanguage} from "../context/Language.jsx";
import {useTranslation} from "react-i18next";

function Projects() {
    const {containerVariants, itemVariants} = useAnimate()
    const {language} = useLanguage()
    const {t} = useTranslation()

    useEffect(() => {
        document.title = `Christa | ${language === "NL" ? "Projecten" : "Projects"}`
    }, [language]);

    return (
        <motion.div className={"mx-4 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 h-full"}
                    variants={containerVariants} initial="hidden" animate="show" layout="position">
            <motion.section
                variants={itemVariants}
                className={"shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-3 xl:col-span-4 sm:col-span-2 col-span-1 content-center text-center"}>
                <H2>{t("projects.main.title")} fun</H2>
            </motion.section>
            
            <DiscordbotCard/>
            <AudioCard/>
            <AdvoCard/>

            <motion.section
                variants={itemVariants}
                className={"shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-3 xl:col-span-4 col-span-1 sm:col-span-2 content-center text-center"}>
                <H2>{t("projects.main.title")} school</H2>
            </motion.section>

            <StagelinkCard/>
            <GamereviewsCard/>
            <SignatuurCard/>
            <TrippieCard/>
            <AdvocaderaserCard/>
        </motion.div>
    )
}

export default Projects