import pf from "../images/christa.jpg";
import {useAnimate} from "../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {H2} from "../components/headings.jsx";
import SocialLinks from "../components/socialLinks.jsx";
import ProjectImgHome from "../components/projectImgHome.jsx";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

function Home() {
    const {containerVariants, itemVariants} = useAnimate()
    const {t} = useTranslation()

    useEffect(() => {
        document.title = "Christa | Home"
    }, []);

    return (
        <motion.div
            className="mx-4 grid md:grid-cols-4 grid-cols-2 gap-4 h-full"
            variants={containerVariants} initial="hidden" animate="show">
            <motion.section variants={itemVariants}
                            className=" shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-2 col-span-1 row-span-2 flex flex-col justify-center gap-2">
                <p className={"text-4xl"}><i className="fa-solid fa-quote-left"></i></p>
                <H2>{t("home.quote")}</H2>
                <p>{t("home.quoteInfo")}</p>
                <p className={"text-4xl text-right"}><i className="fa-solid fa-quote-right"></i></p>
            </motion.section>

            <motion.img variants={itemVariants}
                        className={"h-full w-full object-cover object-top rounded-xl col-span-1 row-span-2"} src={pf}
                        alt="foto christa"/>
            <motion.section variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 row-span-3 flex flex-col gap-3 justify-between"}>
                <H2>{t("home.projects")}</H2>
                <ProjectImgHome/>
            </motion.section>

            <motion.section variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between row-span-1"}>
                <div>
                    <H2>{t("home.contact1")}</H2>
                    <H2 className={"pb-2"}>{t("home.contact2")}</H2>
                </div>
                <div className={"flex flex-col sm:flex-row gap-5 justify-center items-center"}>
                    <SocialLinks/>
                </div>
            </motion.section>

            <motion.section
                variants={itemVariants}
                className={"shadow-lg  rounded-2xl p-4 bg-blue-400 md:col-span-2 col-span-1 md:row-span-1 row-span-2"}>
                <H2>{t("home.bioTitle")}</H2>
                <p>{t("home.bio")}</p>
            </motion.section>
        </motion.div>
    )
}

export default Home