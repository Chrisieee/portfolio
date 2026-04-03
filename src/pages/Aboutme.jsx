import pf from "../images/christa.jpg";
import {useAnimate} from "../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {H2, H3} from "../components/headings.jsx";
import SocialLinks from "../components/socialLinks.jsx";
import Skills from "../components/info/skills.jsx";
import Design from "../components/info/design.jsx";
import FrontEnd from "../components/info/frontEnd.jsx";
import BackEnd from "../components/info/backEnd.jsx";
import Database from "../components/info/database.jsx";
import {CvButton} from "../components/button.jsx";
import {useEffect} from "react";
import {useLanguage} from "../context/Language.jsx";
import {useTranslation} from "react-i18next";

function About() {
    const {t} = useTranslation()
    const {containerVariants, itemVariants} = useAnimate()
    const {language} = useLanguage()

    useEffect(() => {
        document.title = `Christa | ${language === "NL" ? "Over mij" : "About me"}`
    }, [language])

    return (
        <motion.div className={"mx-4 grid md:grid-cols-4 grid-cols-2 gap-4 h-full"} variants={containerVariants}
                    initial="hidden" animate="show">
            <motion.img variants={itemVariants}
                        className={"h-56 md:h-full w-full object-cover object-top rounded-xl col-span-2 md:col-span-1 row-span-1 md:row-span-3"}
                        src={pf} alt="foto christa"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-2 col-span-2 row-span-3"}>
                <H2>{t("about.bioTitle")}</H2>
                <p>{t("about.bio")}</p>
                <H3>{t("about.hobby")}</H3>
                <p>{t("about.hobbyInfo")}</p>
                <H3>{t("about.internship")}</H3>
                <p>{t("about.internshipInfo")}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between md:row-span-3 col-span-2 md:col-span-1"}>
                <H2>Contact</H2>
                <CvButton/>
                <div className={"flex gap-5 justify-center"}>
                    <SocialLinks/>
                </div>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-4 col-span-2 content-center text-center"}>
                <H2>{t("about.experience")}</H2>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-3 row-span-2"}>
                <H3>Skills:</H3>
                <Skills/>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-5 row-span-2"}>
                <div>
                    <H3>Design:</H3>
                    <Design/>
                </div>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-2 row-span-2"}>
                <H3>Front-end:</H3>
                <FrontEnd/>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-5 row-span-2"}>
                <div>
                    <H3>Back-end:</H3>
                    <BackEnd/>
                </div>
                <div>
                    <H3 className={"pb-2"}>Database:</H3>
                    <Database/>
                </div>
            </motion.article>
        </motion.div>
    )
}

export default About