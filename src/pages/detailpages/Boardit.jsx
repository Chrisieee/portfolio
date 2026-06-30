import foto from '../../images/boardit.png'
import foto2 from '../../images/boardit/board2.png'
import foto3 from '../../images/boardit/board3.png'
import foto4 from '../../images/boardit/board4.png'
import foto5 from '../../images/boardit/board5.png'
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import {GitButton, ShowcaseButton} from "../../components/button.jsx";
import {H2, H3} from "../../components/headings.jsx";
import {useEffect} from "react";
import ProjectImg from "../../components/projectImg.jsx";
import {useTranslation} from "react-i18next";

function Boardit() {
    const {t} = useTranslation()
    const {containerVariants, itemVariants} = useAnimate()

    useEffect(() => {
        document.title = "Christa | Board-it project"
    })

    return (
        <motion.section layoutId="project-10" className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}
                        variants={containerVariants} initial="hidden" animate="show" layout="position"
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}>
            <motion.img layoutId="project-10-image" variants={itemVariants}
                        className={"border shadow-lg h-full w-full object-cover object-center rounded-xl col-span-2 row-span-3"}
                        src={foto} alt="foto boardit"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-2 md:col-span-1 row-span-3"}>
                <H2 className={"text-3xl font-heading pb-2"}>Board-it (team)</H2>
                <p>01-06-2026 - 26-06-2026</p>
                <p className={"text-sm"}>{t("projects.boardit.details1")}</p>
                <p className={"text-sm pt-2"}>{t("projects.boardit.details2")}</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-2 md:col-span-1 row-span-3 flex md:flex-col gap-4 justify-between"}>
                <div>
                    <H3 className={"text-2xl font-heading pb-2"}>{t("ui.tools")}</H3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-brands fa-react"></i></td>
                            <td className={"w-8/9"}>React</td>
                        </tr>
                        <tr>
                            <td><i className="fa-brands fa-laravel"></i></td>
                            <td className={"w-8/9"}>Laravel</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Tailwind CSS</td>
                        </tr>
                        <tr>
                            <td><i className="fa-brands fa-figma"></i></td>
                            <td className={"w-8/9"}>Figma</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2 text-center"}>
                    <ShowcaseButton link={"https://project.cmi.hr.nl/2024_2025/cle3_t10/trippie/"}/>
                    <GitButton link={"https://github.com/dingoskye/tle8-startup"}> Github</GitButton>
                </div>
            </motion.article>

            <ProjectImg src={foto2} project={"boardit"} className={"object-center"}/>
            <ProjectImg src={foto3} project={"boardit"} className={"object-center"}/>
            <ProjectImg src={foto4} project={"boardit"} className={"object-center"}/>
            <ProjectImg src={foto5} project={"boardit"} className={"object-center"}/>
        </motion.section>
    )
}

export default Boardit