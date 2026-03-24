import stage from "../images/StageLink.png";
import {useNavigate} from "react-router";
import audio from "../images/Audio.png";
import discord from "../images/Discord.png";

function ProjectImgHome() {
    const navigate = useNavigate()

    return (
        <>
            <img onClick={() => {
                navigate("/projects/5")
            }} className={"object-cover object-left rounded-xl w-full growo border-2 hover:scale-105"}
                 src={discord}
                 alt="foto discord bot"/>
            <img onClick={() => {
                navigate("/projects/4")
            }} className={"object-cover object-top rounded-xl w-full grow border-2 hover:scale-105"} src={audio}
                 alt="foto audio api"/>
            <img onClick={() => {
                navigate("/projects/7")
            }} className={"object-cover object-center rounded-xl w-full grow border-2 hover:scale-105"}
                 src={stage}
                 alt="foto stagelink"/>
        </>
    )
}

export default ProjectImgHome