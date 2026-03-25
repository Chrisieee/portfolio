import foto from '../../images/Audio.png'
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {useProjects} from "../../context/ProjectsContext.jsx";
import {useLanguage} from "../../context/Language.jsx";
import {GitButton, LiveButton} from "../../components/button.jsx";
import {useEffect} from "react";

function Audio() {
    const {containerVariants, itemVariants} = useAnimate()
    const {audio} = useProjects()
    const {language} = useLanguage()

    useEffect(() => {
        document.title = `Christa | Audio API project`
    }, [language])

    return (
        <motion.div layoutId="project-4" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                    variants={containerVariants} initial="hidden" animate="show" layout="position" exit={{opacity: 0}}
                    transition={{duration: 0.2}}>
            <motion.img layoutId="project-4-image" variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto advocaderaser"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Audio API (solo)</h2>
                <p>02-02-2026 - 03-02-2026</p>
                <p className={"text-sm"}>{audio.details1}</p>
                <p className={"text-sm pt-2"}>{audio.details2}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 row-span-1 flex flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>{language === "NL" ? "Tools & talen:" : "Tools & languages:"}</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-brands fa-js"></i></td>
                            <td className={"w-8/9"}>Javascript</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Tailwind CSS</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Audio API</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2 text-center"}>
                    <LiveButton link={"https://chrisieee.github.io/Audio-visual-experience/"}/>
                    <GitButton link={"https://github.com/Chrisieee/Audio-visual-experience"}> Github</GitButton>
                </div>
            </motion.article>
        </motion.div>
    )
}

export default Audio