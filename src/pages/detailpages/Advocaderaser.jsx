import foto from '../../images/Advocaderaser.png'
import foto2 from '../../images/advo/Advo1.png'
import foto3 from '../../images/advo/Advo2.png'
import foto4 from '../../images/advo/Advo3.png'
import foto5 from '../../images/advo/Advo4.png'
import {useProjects} from "../../context/ProjectsContext.jsx";
import {useLanguage} from "../../context/Language.jsx";
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {GitButton, LiveButton} from "../../components/button.jsx";
import {useEffect} from "react";
import ProjectImg from "../../components/projectImg.jsx";

function Advocaderaser() {
    const {advo} = useProjects()
    const {language} = useLanguage()
    const {containerVariants, itemVariants} = useAnimate()

    useEffect(() => {
        document.title = `Christa | Advocaderaser project`
    }, [language])

    return (
        <motion.div layoutId="project-1" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                    variants={containerVariants} layout="position" exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    initial="hidden" animate="show">
            <motion.img layoutId="project-1-image" variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto advocaderaser"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Advocaderaser (solo)</h2>
                <p className={"text-sm"}>{advo.details1}</p>
                <p className={"text-sm pt-2"}>{advo.details2}</p>
                <p className={"text-sm pt-2"}>{advo.details3}</p>
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
                    <LiveButton link="https://chrisieee.github.io/Advocaderaser/"/>
                    <GitButton link="https://github.com/Chrisieee/Advocaderaser"> Github</GitButton>
                </div>
            </motion.article>
            <ProjectImg src={foto2} project={"advocaderaser"} classname={"object-center"}/>
            <ProjectImg src={foto3} project={"advocaderaser"} classname={"object-right"}/>
            <ProjectImg src={foto4} project={"advocaderaser"} classname={"object-right"}/>
            <ProjectImg src={foto5} project={"advocaderaser"} classname={"object-center"}/>
        </motion.div>
    )
}

export default Advocaderaser