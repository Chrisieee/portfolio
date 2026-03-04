import {Link} from "react-router";
import gamereview from "../images/Gamereviews.png";
import signatuur from "../images/Signatuur.png";
import advocaderaser from "../images/Advocaderaser.png";
import audio from "../images/Audio.png";
import discord from "../images/Discord.png";
import {useProjects} from "../context/ProjectsContext.jsx";
import {useLanguage} from "../context/Language.jsx";
import {useAnimate} from "../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {useStyle} from "../context/StylingContext.jsx";
import H2 from "../components/h2.jsx";
import H3 from "../components/h3.jsx";
import ProjectCard from "../components/projectCard.jsx";

function Projects() {
    const {project} = useProjects()
    const {language} = useLanguage()
    const {containerVariants, itemVariants} = useAnimate()
    const {button, button2} = useStyle()

    return (
        <motion.div className={"mx-4 grid md:grid-cols-3 grid-cols-1 gap-4 h-full"}
                    variants={containerVariants} initial="hidden" animate="show" layout="position">
            <motion.section
                variants={itemVariants}
                className={"shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-3 col-span-1 content-center text-center"}>
                <H2>{project.title} fun</H2>
            </motion.section>

            <ProjectCard layoutId="project-5">
                <div>
                    <H3 className={"pb-2"}>Discord bot (solo)</H3>
                    <motion.img layoutId="project-5-image"
                                className={"object-cover object-left rounded-xl w-full h-50 border-2"} src={discord}
                                alt="foto discord bot"/>
                </div>
                <div className={"flex justify-evenly pt-2"}>
                    <p className={"text-lg"}><i className="fa-brands fa-js text-2xl"></i> Javascript</p>
                </div>
                <p className={"text-sm"}>{project.project5}</p>
                <div className={"flex-col flex gap-2"}>
                    <Link
                        className={button}
                        to={"/projects/5"}>{language === "NL" ? "Meer informatie" : "More information"}</Link>
                    <a className={button}
                       href="https://github.com/Chrisieee/Hulpie" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Github</a>
                </div>
            </ProjectCard>

            <ProjectCard layoutId="project-4">
                <div>
                    <H3 className={"pb-2"}>Audio API (solo)</H3>
                    <motion.img layoutId="project-4-image"
                                className={"object-cover object-top rounded-xl w-full h-50 border-2"} src={audio}
                                alt="foto audio api"/>
                </div>
                <div className={"flex justify-evenly pt-2"}>
                    <p className={"text-lg"}><i className="fa-brands fa-js text-2xl"></i> Javascript</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Tailwind</p>
                </div>
                <p className={"text-sm"}>{project.project4}</p>
                <div className={"flex-col flex gap-2"}>
                    <Link
                        className={button}
                        to={"/projects/4"}>{language === "NL" ? "Meer informatie" : "More information"}</Link>
                    <a className={button}
                       href="https://chrisieee.github.io/Audio-visual-experience/" target={"_blank"}><i
                        className="fa-solid fa-circle text-red-500"></i> Live project</a>
                </div>
            </ProjectCard>

            <motion.section
                variants={itemVariants}
                className={"shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-3 col-span-1 content-center text-center"}>
                <H2>{project.title} school</H2>
            </motion.section>

            <ProjectCard layoutId="project-3">
                <div>
                    <H3 className={"pb-2"}>Gamereviews (solo)</H3>
                    <motion.img layoutId="project-3-image"
                                className={"object-cover object-center rounded-xl w-full h-50 border-2"}
                                src={gamereview} alt="foto gamereview"/>
                </div>
                <div className={"flex justify-evenly pt-2"}>
                    <p className={"text-lg"}><i className="fa-brands fa-react text-2xl"></i> React</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Tailwind</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Express JS</p>
                </div>
                <p className={"text-sm"}>{project.project3}</p>
                <div className={"flex-col flex gap-2"}>
                    <Link
                        className={button}
                        to={"/projects/3"}>{language === "NL" ? "Meer informatie" : "More information"}</Link>
                    <div className={"w-full flex gap-2"}>
                        <a className={button2}
                           href="https://github.com/Chrisieee/gamereviews-react" target={"_blank"}><i
                            className="fa-brands fa-github"></i> Front-end</a>
                        <a className={button2}
                           href="https://github.com/Chrisieee/gamereviews-express" target={"_blank"}><i
                            className="fa-brands fa-github"></i> Back-end</a>
                    </div>
                </div>
            </ProjectCard>

            <ProjectCard layoutId="project-2">
                <div>
                    <H3 className={"pb-2"}>{project.title2}</H3>
                    <motion.img layoutId="project-2-image"
                                className={"object-cover object-left rounded-xl w-full h-50 border-2"} src={signatuur}
                                alt="foto signatuur"/>
                </div>
                <div className={"flex justify-evenly pt-2"}>
                    <p className={"text-lg"}><i className="fa-brands fa-js text-2xl"></i> Javascript</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Excalibur</p>
                </div>
                <p className={"text-sm"}>{project.project2}</p>
                <div className={"flex-col flex gap-2"}>
                    <Link
                        className={button}
                        to={"/projects/2"}>{language === "NL" ? "Meer informatie" : "More information"}</Link>
                    <a className={button}
                       href="https://chrisieee.github.io/signatuuropdracht-tle2/" target={"_blank"}><i
                        className="fa-solid fa-circle text-red-500"></i> Live project</a>
                </div>
            </ProjectCard>

            <ProjectCard layoutId="project-1">
                <div>
                    <H3 className={"pb-2"}>Advocaderaser (solo)</H3>
                    <motion.img layoutId="project-1-image"
                                className={"object-cover object-left rounded-xl w-full h-50 border-2"}
                                src={advocaderaser}
                                alt="foto advocaderaser"/>
                </div>
                <div className={"flex justify-evenly pt-2"}>
                    <p className={"text-lg"}><i className="fa-brands fa-js text-2xl"></i> Javascript</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Excalibur</p>
                </div>
                <p className={"text-sm"}>{project.project1}</p>
                <div className={"flex-col flex gap-2"}>
                    <Link
                        className={button}
                        to={"/projects/1"}>{language === "NL" ? "Meer informatie" : "More information"}</Link>
                    <a className={button}
                       href="https://chrisieee.github.io/Advocaderaser/" target={"_blank"}><i
                        className="fa-solid fa-circle text-red-500"></i> Live project</a>
                </div>
            </ProjectCard>
        </motion.div>
    )
}

export default Projects