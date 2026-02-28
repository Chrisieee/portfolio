import pf from "../images/christa.jpg";
import {useAbout} from "../context/AboutContext.jsx";
import {useAnimate} from "../context/AnimationContext.jsx";
import {motion} from "framer-motion";

function About() {
    const {about} = useAbout()
    const {containerVariants, itemVariants} = useAnimate()

    return (
        <motion.div className={"mx-4 grid md:grid-cols-4 grid-cols-2 gap-4 h-full"} variants={containerVariants}
                    initial="hidden" animate="show">
            <motion.img variants={itemVariants}
                        className={"h-56 md:h-full w-full object-cover object-top rounded-xl col-span-2 md:col-span-1 row-span-1 md:row-span-3"}
                        src={pf} alt="foto christa"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-2 col-span-2 row-span-3"}>
                <h2 className={"text-2xl font-heading"}>{about.bio}</h2>
                <p>{about.bioInfo}</p>
                <h3 className={"text-xl font-heading"}>{about.hobby}</h3>
                <p>{about.hobbyInfo}</p>
                <h3 className={"text-xl font-heading"}>{about.stage}</h3>
                <p>{about.stageInfo}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between md:row-span-3 col-span-2 md:col-span-1"}>
                <h2 className={"text-2xl font-heading"}>Contact</h2>
                <a className={"p-2 rounded-xl bg-blue-300 text-center border-2 border-blue-400 hover:bg-blue-400 hover:border-blue-300"}
                   href="/ChristaPol_CV_01-2026.pdf"
                   download={"ChristaPol_CV_01-2026.pdf"}>Download
                    CV ({about.cv})</a>
                <div className={"flex gap-5 justify-center"}>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href="mailto:christa_pol1@hotmail.com"><i
                        className="fa-solid fa-envelope"></i></a>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href={"https://www.linkedin.com/in/christa-pol/"}
                       target={"_blank"}><i className="fa-brands fa-linkedin"></i></a>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href={"https://github.com/Chrisieee"} target={"_blank"}><i
                        className="fa-brands fa-github"></i></a>
                </div>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-4 col-span-2 content-center text-center"}>
                <h3 className={"text-3xl font-heading"}>{about.experience}</h3>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-3 row-span-2"}>
                <h3 className={"text-xl font-heading"}>Skills:</h3>
                <p>- Web design</p>
                <p>- Web development</p>
                <p>- Media design</p>
                <p>- 3D art</p>
            </motion.article>
            
            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-5 row-span-2"}>
                <div>
                    <h3 className={"text-xl font-heading pb-2"}>Design:</h3>
                    <table className={"w-full"}>
                        <tbody>
                        <tr>
                            <td><i className="fa-brands fa-figma"></i></td>
                            <td className={"w-8/9"}>Figma</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Adobe Photoshop</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Adobe Illustrator</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Adobe After Affects</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Adobe Premiere Pro</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-cube"></i></td>
                            <td className={"w-8/9"}>Autodesk Maya</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-cube"></i></td>
                            <td className={"w-8/9"}>Blender</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-cube"></i></td>
                            <td className={"w-8/9"}>Unity</td>
                        </tr>
                        <tr className={"text-gray-700"}>
                            <td><i className="fa-solid fa-cube"></i></td>
                            <td className={"w-8/9"}>{about.basic} Unreal</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-2 row-span-2"}>
                <h3 className={"text-xl font-heading"}>Front-end:</h3>
                <table className={"w-full"}>
                    <tbody>
                    <tr>
                        <td><i className="fa-brands fa-html5"></i></td>
                        <td className={"w-8/9"}>HTML</td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-css3-alt"></i></td>
                        <td className={"w-8/9"}>CSS</td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-js"></i></td>
                        <td className={"w-8/9"}>Javascript</td>
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-file-code"></i></td>
                        <td className={"w-8/9"}>Excalibur Game engine</td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-react"></i></td>
                        <td className={"w-8/9"}>React</td>
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-file-code"></i></td>
                        <td className={"w-8/9"}>Tailwind CSS</td>
                    </tr>
                    <tr className={"text-gray-700"}>
                        <td><i className="fa-brands fa-python"></i></td>
                        <td className={"w-8/9"}>{about.basic} Python</td>
                    </tr>
                    <tr className={"text-gray-700"}>
                        <td><i className="fa-regular fa-file-code"></i></td>
                        <td className={"w-8/9"}>{about.basic} C#</td>
                    </tr>
                    </tbody>
                </table>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-5 row-span-2"}>
                <div>
                    <h3 className={"text-xl font-heading pb-2"}>Back-end:</h3>
                    <table className={"w-full"}>
                        <tbody>
                        <tr>
                            <td><i className="fa-brands fa-php"></i></td>
                            <td className={"w-8/9"}>PHP</td>
                        </tr>
                        <tr>
                            <td><i className="fa-brands fa-laravel"></i></td>
                            <td className={"w-8/9"}>Laravel</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Express JS</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className={"text-xl font-heading pb-2"}>Database:</h3>
                    <table className={"w-full"}>
                        <tbody>
                        <tr>
                            <td><i className="fa-solid fa-database"></i></td>
                            <td className={"w-8/9"}>MySQL</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-database"></i></td>
                            <td className={"w-8/9"}>SQLite</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-database"></i></td>
                            <td className={"w-8/9"}>MongoDB</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-database"></i></td>
                            <td className={"w-8/9"}>Mongoose</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </motion.article>
        </motion.div>
    )
}

export default About