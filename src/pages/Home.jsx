import pf from "../images/christa.jpg";
import {useHome} from "../context/HomeContext.jsx";
import {useAnimate} from "../context/AnimationContext.jsx";
import gamereview from "../images/Gamereviews.png";
import {useNavigate} from "react-router";
import audio from "../images/Audio.png";
import discord from "../images/Discord.png";
import {motion} from "framer-motion";

function Home() {
    const {home} = useHome()
    const navigate = useNavigate()
    const {containerVariants, itemVariants} = useAnimate()

    return (
        <motion.div
            className="mx-4 grid md:grid-cols-4 grid-cols-2 gap-4 h-full"
            variants={containerVariants} initial="hidden" animate="show">
            <motion.section
                variants={itemVariants}
                className="shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-2 col-span-1 row-span-2 flex flex-col justify-center gap-2">
                <p className={"text-4xl"}><i className="fa-solid fa-quote-left"></i></p>
                <h2 className={"text-2xl font-heading"}>{home.quote}</h2>
                <p>{home.quoteInfo}</p>
                <p className={"text-4xl text-right"}><i className="fa-solid fa-quote-right"></i></p>
            </motion.section>

            <motion.img variants={itemVariants}
                        className={"h-full w-full object-cover object-top rounded-xl col-span-1 row-span-2"} src={pf}
                        alt="foto christa"/>

            <motion.section variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 row-span-3 flex flex-col gap-3 justify-between"}>
                <h2 className={"text-2xl font-heading"}>{home.projects}</h2>
                <img onClick={() => {
                    navigate("/projects/5")
                }} className={"object-cover object-left rounded-xl w-full grow-1 border-2"} src={discord}
                     alt="foto discord bot"/>
                <img onClick={() => {
                    navigate("/projects/4")
                }} className={"object-cover object-top rounded-xl w-full grow-1 border-2"} src={audio}
                     alt="foto audio api"/>
                <img onClick={() => {
                    navigate("/projects/3")
                }} className={"object-cover object-center rounded-xl w-full grow-1 border-2"} src={gamereview}
                     alt="foto gamereview"/>
            </motion.section>

            <motion.section variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between row-span-1"}>
                <div>
                    <h2 className={"text-2xl font-heading"}>{home.contact1}</h2>
                    <h2 className={"text-2xl font-heading pb-2"}>{home.contact2}</h2>
                </div>
                <div className={"flex flex-col md:flex-row gap-5 justify-center items-center"}>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href="mailto:christa_pol1@hotmail.com"><i
                        className="fa-solid fa-envelope"></i></a>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href={"https://www.linkedin.com/in/christa-pol/"}
                       target={"_blank"}><i
                        className="fa-brands fa-linkedin"></i></a>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href={"https://github.com/Chrisieee"} target={"_blank"}><i
                        className="fa-brands fa-github"></i></a>
                </div>
            </motion.section>

            <motion.section
                variants={itemVariants}
                className={"shadow-lg  rounded-2xl p-4 bg-blue-400 md:col-span-2 col-span-1 md:row-span-1 row-span-2"}>
                <h2 className={"text-2xl font-heading"}>{home.bio}</h2>
                <p>{home.bioInfo}</p>
            </motion.section>
        </motion.div>
    )
}

export default Home