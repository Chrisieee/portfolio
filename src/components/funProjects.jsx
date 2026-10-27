import {H3} from "./headings.jsx";
import {motion} from "framer-motion";
import audio from "../images/Audio.png";
import discord from "../images/Discord.png";
import advo from "../images/Advo-godot.png";
import slots from "../images/BehindTheSlots.png";
import picture from "../images/PictuteIt.png";
import leave from "../images/LeaveIt.png";
import {GitButton, InfoButton, LiveButton} from "./button.jsx";
import ProjectCard from "./projectCard.jsx";
import {useTranslation} from "react-i18next";

function AudioCard() {
    const {t} = useTranslation()
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
            <p className={"text-sm"}>{t("projects.main.audioInfo")}</p>
            <div className={"flex-col flex gap-2"}>
                <InfoButton link={"/projects/4"}/>
                <LiveButton link="https://chrisieee.github.io/Audio-visual-experience/"/>
            </div>
        </ProjectCard>
    )
}

function DiscordbotCard() {
    const {t} = useTranslation()
    return (
        <ProjectCard layoutId="project-5">
            <div>
                <H3 className={"pb-2"}>WIP Discord bot (solo)</H3>
                <p>30-01-2026 - {t("projects.main.date")}</p>
                <motion.img layoutId="project-5-image"
                            className={"object-cover object-left rounded-xl w-full h-50 border-2"} src={discord}
                            alt="foto discord bot"/>
            </div>
            <div className={"flex justify-evenly pt-2"}>
                <p className={"text-lg"}><i className="fa-brands fa-js text-2xl"></i> Javascript</p>
            </div>
            <p className={"text-sm"}>{t("projects.main.discordInfo")}</p>
            <div className={"flex-col flex gap-2"}>
                <InfoButton link={"/projects/5"}/>
                <GitButton link="https://github.com/Chrisieee/Hulpie"> Github</GitButton>
            </div>
        </ProjectCard>
    )
}

function AdvoCard() {
    const {t} = useTranslation()
    return (
        <ProjectCard layoutId="project-8">
            <div>
                <H3 className={"pb-2"}>WIP Advocaderaser (solo)</H3>
                <p>11-07-2025 - {t("projects.main.date")}</p>
                <motion.img layoutId="project-8-image"
                            className={"object-cover object-left rounded-xl w-full h-50 border-2"} src={advo}
                            alt="foto advocaderaser"/>
            </div>
            <div className={"flex justify-evenly pt-2"}>
                <p className={"text-lg"}><i className="fa-solid fa-cube text-2xl"></i> Godot</p>
                <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> C#</p>
            </div>
            <p className={"text-sm"}>{t("projects.main.advoGodotInfo")}</p>
            <div className={"flex-col flex gap-2"}>
                <InfoButton link={"/projects/8"}/>
                <GitButton link="https://github.com/Chrisieee/advocaderaser-godot"> Github</GitButton>
            </div>
        </ProjectCard>
    )
}

function SlotsCard() {
    const {t} = useTranslation()
    return (
        <ProjectCard layoutId="project-11">
            <div>
                <H3 className={"pb-2"}>Behind the slots (solo)</H3>
                <p>19-06-2026 - 27-06-2026</p>
                <motion.img layoutId="project-11-image"
                            className={"object-cover object-left rounded-xl w-full h-50 border-2"} src={slots}
                            alt="foto behind the slots"/>
            </div>
            <div className={"flex justify-evenly pt-2"}>
                <p className={"text-lg"}><i className="fa-solid fa-cube text-2xl"></i> Godot</p>
                <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> GDScript</p>
            </div>
            <p className={"text-sm"}>{t("projects.main.behindSlotsInfo")}</p>
            <div className={"flex-col flex gap-2"}>
                <InfoButton link={"/projects/11"}/>
                <LiveButton link="https://ctrlchrisie.itch.io/behind-the-slots"/>
            </div>
        </ProjectCard>
    )
}

function PictureCard() {
    const {t} = useTranslation()
    return (
        <ProjectCard layoutId="project-12">
            <div>
                <H3 className={"pb-2"}>Picture it (solo)</H3>
                <p>11-07-2026 - 19-07-2026</p>
                <motion.img layoutId="project-12-image"
                            className={"object-cover object-center rounded-xl w-full h-50 border-2"} src={picture}
                            alt="foto picture it"/>
            </div>
            <div className={"flex justify-evenly pt-2"}>
                <p className={"text-lg"}><i className="fa-solid fa-cube text-2xl"></i> Godot</p>
                <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> GDScript</p>
            </div>
            <p className={"text-sm"}>{t("projects.main.pictureItInfo")}</p>
            <div className={"flex-col flex gap-2"}>
                <InfoButton link={"/projects/12"}/>
                <LiveButton link="https://ctrlchrisie.itch.io/picture-it"/>
            </div>
        </ProjectCard>
    )
}

function LeaveCard() {
    const {t} = useTranslation()
    return (
        <ProjectCard layoutId="project-13">
            <div>
                <H3 className={"pb-2"}>Leave it (solo)</H3>
                <p>25-09-2026 - 27-09-2026</p>
                <motion.img layoutId="project-13-image"
                            className={"object-cover object-center rounded-xl w-full h-50 border-2"} src={leave}
                            alt="foto leave it"/>
            </div>
            <div className={"flex justify-evenly pt-2"}>
                <p className={"text-lg"}><i className="fa-solid fa-cube text-2xl"></i> Godot</p>
                <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> GDScript</p>
            </div>
            <p className={"text-sm"}>{t("projects.main.leaveItInfo")}</p>
            <div className={"flex-col flex gap-2"}>
                <InfoButton link={"/projects/13"}/>
                <LiveButton link="https://ctrlchrisie.itch.io/leave-it"/>
            </div>
        </ProjectCard>
    )
}

export {AudioCard, DiscordbotCard, AdvoCard, SlotsCard, PictureCard, LeaveCard}