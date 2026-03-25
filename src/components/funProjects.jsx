import {H3} from "./headings.jsx";
import {motion} from "framer-motion";
import audio from "../images/Audio.png";
import discord from "../images/Discord.png";
import {GitButton, InfoButton, LiveButton} from "./button.jsx";
import ProjectCard from "./projectCard.jsx";
import {useProjects} from "../context/ProjectsContext.jsx";
import {useLanguage} from "../context/Language.jsx";

function AudioCard() {
    const {project} = useProjects()
    return (
        <ProjectCard layoutId="project-4">
            <div>
                <H3 className={"pb-2"}>Audio API (solo)</H3>
                <p>02-02-2026 - 03-02-2026</p>
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
    )
}

function DiscordbotCard() {
    const {project} = useProjects()
    const {language} = useLanguage()
    return (
        <ProjectCard layoutId="project-5">
            <div>
                <H3 className={"pb-2"}>WIP Discord bot (solo)</H3>
                <p>30-01-2026 - {language === "NL" ? "Heden" : "Present"}</p>
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
    )
}

export {AudioCard, DiscordbotCard}