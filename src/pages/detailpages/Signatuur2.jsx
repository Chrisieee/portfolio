import foto from '../../images/Signatuur2.png'
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {GitButton, LiveButton} from "../../components/button.jsx";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

function Signatuur2() {
    const {containerVariants, itemVariants} = useAnimate()
    const {t} = useTranslation()

    useEffect(() => {
        document.title = `Christa | ${t("projects.main.signTitle")}`
    }, [])

    return (
        <motion.div layoutId="project-9" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                    variants={containerVariants} initial="hidden" animate="show" layout="position" exit={{opacity: 0}}
                    transition={{duration: 0.2}}>
            <motion.img layoutId="project-4-image" variants={itemVariants}
                        className={"border shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto puzzel game"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-2 md:col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>{t("projects.main.signTitle")} (solo)</h2>
                <p>05-06-2026 - 19-06-2026</p>
                <p className={"text-sm"}>{t("projects.sign2.details1")}</p>
                <p className={"text-sm pt-2"}>{t("projects.sign2.details2")}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-2 md:col-span-1 row-span-1 flex md:flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>{t("ui.tools")}</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-solid fa-cube"></i></td>
                            <td className={"w-8/9"}>Godot</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>C#</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Adobe Photoshop</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Adobe Illustrator</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2 text-center"}>
                    <LiveButton link={"https://chrisieeee.itch.io/signatuur-tle4"}/>
                    <GitButton link={"https://github.com/Chrisieee/signatuur-TLE4"}> Github</GitButton>
                </div>
            </motion.article>
        </motion.div>
    )
}

export default Signatuur2