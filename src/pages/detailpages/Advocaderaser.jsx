import foto from '../../images/Advocaderaser.png'
import foto2 from '../../images/advo/Advo1.png'
import foto3 from '../../images/advo/Advo2.png'
import foto4 from '../../images/advo/Advo3.png'
import foto5 from '../../images/advo/Advo4.png'
import {useProjects} from "../../context/ProjectsContext.jsx";
import {useLanguage} from "../../context/Language.jsx";
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";

function Advocaderaser() {
    const {advo} = useProjects()
    const {language} = useLanguage()
    const {containerVariants, itemVariants} = useAnimate()

    return (
        <motion.div className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"} variants={containerVariants}
                    initial="hidden" animate="show">
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto advocaderaser"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Advocaderaser (solo)</h2>
                <p className={"text-sm"}>{advo.details1}</p>
                <p className={"text-sm pt-2"}>{advo.details2}</p>
                <p className={"text-sm pt-2"}>{advo.details3}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 row-span-1 flex flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>{language === "NL" ? "Tools & talen:" : "Tools & languages:"}</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-brands fa-js"></i></td>
                            <td className={"w-8/9"}>Javascript</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Excalibur Game engine</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Procreate</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://chrisieee.github.io/Advocaderaser/" target={"_blank"}>Live project</a>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/Advocaderaser" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Github</a>
                </div>
            </motion.article>
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                        src={foto2} alt="foto advocaderaser"/>
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-right rounded-xl col-span-1 row-span-1"}
                        src={foto3} alt="foto advocaderaser"/>
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-right rounded-xl col-span-1 row-span-1"}
                        src={foto4} alt="foto advocaderaser"/>
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                        src={foto5} alt="foto advocaderaser"/>

        </motion.div>
    )
}

export default Advocaderaser