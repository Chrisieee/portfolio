import foto from '../../images/Signatuur.png'
import foto2 from '../../images/sign/Sign1.png'
import foto3 from '../../images/sign/Sign2.png'
import foto4 from '../../images/sign/Sign3.png'
import foto5 from '../../images/sign/Sign4.png'
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {GitButton, LiveButton} from "../../components/button.jsx";
import {useEffect} from "react";
import ProjectImg from "../../components/projectImg.jsx";
import {useTranslation} from "react-i18next";

function Signatuur() {
    const {t} = useTranslation()
    const {containerVariants, itemVariants} = useAnimate()

    useEffect(() => {
        document.title = `Christa | ${t("projects.main.signTitle")}`
    }, [])

    return (
        <motion.section layoutId="project-2" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                        variants={containerVariants} initial="hidden" animate="show" layout="position"
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}>
            <motion.img layoutId="project-2-image" variants={itemVariants}
                        className={"border shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto signatuur"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-2 md:col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>{t("projects.main.signTitle")} (solo)</h2>
                <p>08-01-2026 - 16-01-2026</p>
                <p className={"text-sm"}>{t("projects.sign.details1")}</p>
                <p className={"text-sm pt-2"}>{t("projects.sign.details2")}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-2 md:col-span-1 row-span-1 flex md:flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>{t("ui.tools")}</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-brands fa-js"></i></td>
                            <td className={"w-8/9"}>Javascript</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Excalibur Game engine</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Procreate</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2 text-center"}>
                    <LiveButton link={"https://chrisieee.github.io/signatuuropdracht-tle2/"}/>
                    <GitButton link={"https://github.com/Chrisieee/signatuuropdracht-tle2"}> Github</GitButton>
                </div>
            </motion.article>

            <ProjectImg src={foto2} project={"signatuur"} classname={"object-center"}/>
            <ProjectImg src={foto3} project={"signatuur"} classname={"object-center"}/>
            <ProjectImg src={foto4} project={"signatuur"} classname={"object-left"}/>
            <ProjectImg src={foto5} project={"signatuur"} classname={"object-center"}/>
        </motion.section>
    )
}

export default Signatuur