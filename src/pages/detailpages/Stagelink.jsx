import foto from '../../images/StageLink.png'
import foto2 from '../../images/stage/Stage1.png'
import foto3 from '../../images/stage/Stage2.png'
import foto4 from '../../images/stage/Stage3.png'
import foto5 from '../../images/stage/Stage4.png'
import {useProjects} from "../../context/ProjectsContext.jsx";
import {useLanguage} from "../../context/Language.jsx";
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {GitButton, ShowcaseButton} from "../../components/button.jsx";
import {H2, H3} from "../../components/headings.jsx";
import {useEffect} from "react";
import ProjectImg from "../../components/projectImg.jsx";

function StageLink() {
    const {stage} = useProjects()
    const {language} = useLanguage()
    const {containerVariants, itemVariants} = useAnimate()

    useEffect(() => {
        document.title = "Christa | StageLink project"
    })

    return (
        <motion.section layoutId="project-7" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                        variants={containerVariants} initial="hidden" animate="show" layout="position"
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}>
            <motion.img layoutId="project-7-image" variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto stagelink"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <H2 className={"text-3xl font-heading pb-2"}>StageLink (team)</H2>
                <p>02-03-2025 - 19-03-2025</p>
                <p className={"text-sm"}>{stage.details1}</p>
                <p className={"text-sm pt-2"}>{stage.details2}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 row-span-1 flex flex-col gap-4 justify-between"}>
                <div>
                    <H3 className={"text-2xl font-heading pb-2"}>{language === "NL" ? "Tools & talen:" : "Tools & languages:"}</H3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Typescript</td>
                        </tr>
                        <tr>
                            <td><i className="fa-brands fa-react"></i></td>
                            <td className={"w-8/9"}>React</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Tailwind CSS</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Chart.js</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2 text-center"}>
                    <ShowcaseButton link={"https://cmgt.hr.nl/projecten/stage-link"}/>
                    <GitButton link={"https://github.com/TLE-3-Stage-Matching/Front-End-4B"}> Github</GitButton>
                </div>
            </motion.article>

            <ProjectImg src={foto2} project={"stagelink"} classname={"object-center"}/>
            <ProjectImg src={foto3} project={"stagelink"} classname={"object-center"}/>
            <ProjectImg src={foto4} project={"stagelink"} classname={"object-center"}/>
            <ProjectImg src={foto5} project={"stagelink"} classname={"object-center"}/>
        </motion.section>
    )
}

export default StageLink