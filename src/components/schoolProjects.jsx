import {H3} from "./headings.jsx";
import {motion} from "framer-motion";
import advocaderaser from "../images/Advocaderaser.png";
import signatuur from "../images/Signatuur.png";
import gamereview from "../images/Gamereviews.png";
import trippie from "../images/Trippie.png";
import stagelink from "../images/StageLink.png";
import {GitButton, InfoButton, LiveButton, ShowcaseButton} from "./button.jsx";
import ProjectCard from "./projectCard.jsx";
import {useProjects} from "../context/ProjectsContext.jsx";

function AdvocaderaserCard() {
    const {project} = useProjects()

    return (
        <ProjectCard layoutId="project-1">
            <div>
                <H3 className={"pb-2"}>Advocaderaser (solo)</H3>
                <p>06-05-2026 - 04-06-2025</p>
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
    )
}

function SignatuurCard() {
    const {project} = useProjects()
    return (
        <ProjectCard layoutId="project-2">
            <div>
                <H3 className={"pb-2"}>{project.title2}</H3>
                <p>08-01-2026 - 16-01-2026</p>
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
    )
}

function GamereviewsCard() {
    const {project} = useProjects()
    return (
        <ProjectCard layoutId="project-3">
            <div>
                <H3 className={"pb-2"}>Gamereviews (solo)</H3>
                <p>19-01-2026 - 27-01-2026</p>
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
    )
}

function TrippieCard() {
    const {project} = useProjects()
    return (
        <ProjectCard layoutId="project-6">
            <div>
                <H3 className={"pb-2"}>Trippie (team)</H3>
                <p>09-04-2025 - 24-05-2025</p>
                <motion.img layoutId="project-6-image"
                            className={"object-cover object-center rounded-xl w-full h-50 border-2"}
                            src={trippie} alt="foto trippie"/>
            </div>
            <div className={"flex justify-evenly pt-2"}>
                <p className={"text-lg"}><i className="fa-brands fa-html5 text-2xl"></i> HTML</p>
                <p className={"text-lg"}><i className="fa-brands fa-js text-2xl"></i> Javascript</p>
                <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> CSS</p>
            </div>
            <p className={"text-sm"}>{project.project6}</p>
            <div className={"flex-col flex gap-2"}>
                <InfoButton link={"/projects/6"}/>
                <LiveButton link="https://project.cmi.hr.nl/2024_2025/cle3_t10/trippie/"/>
            </div>
        </ProjectCard>
    )
}

function StagelinkCard() {
    const {project} = useProjects()
    return (
        <ProjectCard layoutId="project-7">
            <div>
                <H3 className={"pb-2"}>StageLink (team)</H3>
                <p>02-03-2025 - 19-03-2025</p>
                <motion.img layoutId="project-7-image"
                            className={"object-cover object-center rounded-xl w-full h-50 border-2"}
                            src={stagelink} alt="foto stagelink"/>
            </div>
            <div className={"flex justify-evenly pt-2"}>
                <p className={"text-lg"}><i className="fa-brands fa-react text-2xl"></i> React</p>
                <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Typescript</p>
                <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Tailwind CSS</p>
            </div>
            <p className={"text-sm"}>{project.project7}</p>
            <div className={"flex-col flex gap-2"}>
                <InfoButton link={"/projects/7"}/>
                <ShowcaseButton link="https://cmgt.hr.nl/projecten/stage-link"/>
            </div>
        </ProjectCard>
    )
}

export {AdvocaderaserCard, SignatuurCard, GamereviewsCard, TrippieCard, StagelinkCard}