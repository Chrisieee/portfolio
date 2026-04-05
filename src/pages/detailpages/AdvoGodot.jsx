import foto from '../../images/Advo-godot.png'
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {GitButton, LiveButton} from "../../components/button.jsx";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

function AdvoGodot() {
    const {containerVariants, itemVariants} = useAnimate()
    const {t} = useTranslation()

    useEffect(() => {
        document.title = `Christa | Advocaderaser Godot project`
    }, [])

    return (
        <motion.div layoutId="project-8" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                    variants={containerVariants} initial="hidden" animate="show" layout="position" exit={{opacity: 0}}
                    transition={{duration: 0.2}}>
            <motion.img layoutId="project-8-image" variants={itemVariants}
                        className={"border shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto advocaderaser"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-2 md:col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Advocaderaser (solo)</h2>
                <p>11-07-2025 - {t("projects.main.date")}</p>
                <p className={"text-sm"}>{t("projects.advoGodot.details1")}</p>
                <p className={"text-sm pt-2"}>{t("projects.advoGodot.details2")}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-2 md:col-span-1 row-span-1 flex md:flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>{t("ui.tools")}</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>C#</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Godot</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Procreate</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2 text-center"}>
                    <GitButton link={"https://github.com/Chrisieee/advocaderaser-godot"}> Github</GitButton>
                </div>
            </motion.article>
        </motion.div>
    )
}

export default AdvoGodot