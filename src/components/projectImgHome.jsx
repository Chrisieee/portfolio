import gamereview from "../images/Gamereviews.png";
import {useNavigate} from "react-router";
import audio from "../images/Audio.png";
import discord from "../images/Discord.png";

function ProjectImgHome() {
    const navigate = useNavigate()

    return (
        <>
            <img onClick={() => {
                navigate("/projects/5")
            }} className={"object-cover object-left rounded-xl w-full grow-1 border-2 hover:scale-105"}
                 src={discord}
                 alt="foto discord bot"/>
            <img onClick={() => {
                navigate("/projects/4")
            }} className={"object-cover object-top rounded-xl w-full grow-1 border-2 hover:scale-105"} src={audio}
                 alt="foto audio api"/>
            <img onClick={() => {
                navigate("/projects/3")
            }} className={"object-cover object-center rounded-xl w-full grow-1 border-2 hover:scale-105"}
                 src={gamereview}
                 alt="foto gamereview"/>
        </>
    )
}

export default ProjectImgHome