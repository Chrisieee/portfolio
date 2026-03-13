import gamereview from "../images/Gamereviews.png";
import signatuur from "../images/Signatuur.png";
import advocaderaser from "../images/Advocaderaser.png";
import audio from "../images/Audio.png";
import discord from "../images/Discord.png";
import {useProjects} from "../context/ProjectsContext.jsx";
import {useAnimate} from "../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {H2, H3} from "../components/headings.jsx";
import ProjectCard from "../components/projectCard.jsx";
import {Button, GitButton, InfoButton, LiveButton} from "../components/button.jsx";

function Projects() {
    const {project} = useProjects()
    const {containerVariants, itemVariants} = useAnimate()

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
                    <InfoButton link={"/projects/5"}/>
                    <GitButton link="https://github.com/Chrisieee/Hulpie"> Github</GitButton>
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
                    <InfoButton link={"/projects/4"}/>
                    <LiveButton link="https://chrisieee.github.io/Audio-visual-experience/"/>
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
                    <InfoButton link={"/projects/3"}/>
                    <div className={"w-full flex gap-2"}>
                        <GitButton href="https://github.com/Chrisieee/gamereviews-react"> Front-end</GitButton>
                        <GitButton href="https://github.com/Chrisieee/gamereviews-express"> Back-end</GitButton>
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
                    <InfoButton link={"/projects/2"}/>
                    <LiveButton link="https://chrisieee.github.io/signatuuropdracht-tle2/"/>
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
                    <InfoButton link={"/projects/1"}/>
                    <LiveButton link="https://chrisieee.github.io/Advocaderaser/"/>
                </div>
            </ProjectCard>
        </motion.div>
    )
}

export default Projects