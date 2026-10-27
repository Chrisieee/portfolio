import board from "../images/boardit.png";
import {useNavigate} from "react-router";
import picture from "../images/PictuteIt.png";
import discord from "../images/Discord.png";

function ProjectImgHome() {
    const navigate = useNavigate()

    return (
        <>
            <img onClick={() => {
                navigate("/projects/5")
            }} className={"object-cover object-left rounded-xl w-full grow border-2 hover:scale-105"}
                 src={discord}
                 alt="foto discord bot"/>
            <img onClick={() => {
                navigate("/projects/12")
            }} className={"object-cover object-top rounded-xl w-full grow border-2 hover:scale-105"}
                 src={picture}
                 alt="foto Picture it"/>
            <img onClick={() => {
                navigate("/projects/10")
            }} className={"object-cover object-center rounded-xl w-full grow border-2 hover:scale-105"}
                 src={board}
                 alt="foto board it"/>
        </>
    )
}

export default ProjectImgHome