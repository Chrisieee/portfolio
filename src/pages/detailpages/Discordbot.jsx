import foto from '../../images/Discord.png'
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {useProjects} from "../../context/ProjectsContext.jsx";
import {useLanguage} from "../../context/Language.jsx";
import {GitButton} from "../../components/button.jsx";
import {useEffect} from "react";

function Discordbot() {
    const {containerVariants, itemVariants} = useAnimate()
    const {bot} = useProjects()
    const {language} = useLanguage()

    useEffect(() => {
        document.title = `Christa | Discord bot project`
    }, [language])

    return (
        <motion.div layoutId="project-5" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                    variants={containerVariants} initial="hidden" animate="show" layout="position" exit={{opacity: 0}}
                    transition={{duration: 0.2}}>
            <motion.img variants={itemVariants} layoutId="project-5-image"
                        className={"border-1 shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto advocaderaser"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Discord bot (solo)</h2>
                <p className={"text-sm"}>{bot.details1}</p>
                <p className={"text-sm pt-2"}>{bot.details2}</p>
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
                            <td className={"w-8/9"}>Discord.js</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Twitch API</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2 text-center"}>
                    <GitButton link={"https://github.com/Chrisieee/Hulpie"}> Github</GitButton>
                </div>
            </motion.article>
        </motion.div>
    )
}

export default Discordbot