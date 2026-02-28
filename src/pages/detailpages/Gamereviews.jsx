import foto from '../../images/Gamereviews.png'
import foto2 from '../../images/full/Full1.png'
import foto3 from '../../images/full/Full2.png'
import foto4 from '../../images/full/Full3.png'
import foto5 from '../../images/full/Full4.png'
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {useProjects} from "../../context/ProjectsContext.jsx";
import {useLanguage} from "../../context/Language.jsx";

function Gamereviews() {
    const {containerVariants, itemVariants} = useAnimate()
    const {review} = useProjects()
    const {language} = useLanguage()

    return (
        <motion.div layoutId="project-3" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                    variants={containerVariants} initial="hidden" animate="show" layout="position" exit={{opacity: 0}}
                    transition={{duration: 0.2}}>
            <motion.img layoutId="project-3-image" variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto advocaderaser"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Gamereviews (solo)</h2>
                <p className={"text-sm"}>{review.details1}</p>
                <p className={"text-sm pt-2"}>{review.details2}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 row-span-1 flex flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>{language === "NL" ? "Tools & talen:" : "Tools & languages:"}</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-brands fa-react"></i></td>
                            <td className={"w-8/9"}>React</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Tailwind CSS</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Express JS</td>
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
                <div className={"flex flex-col gap-2"}>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/gamereviews-react" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Front-end</a>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/gamereviews-express" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Back-end</a>
                </div>
            </motion.article>
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                        src={foto2} alt="foto advocaderaser"/>
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                        src={foto3} alt="foto advocaderaser"/>
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                        src={foto4} alt="foto advocaderaser"/>
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                        src={foto5} alt="foto advocaderaser"/>

        </motion.div>
    )
}

export default Gamereviews