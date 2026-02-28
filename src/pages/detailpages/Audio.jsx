import foto from '../../images/Audio.png'
import {useAnimate} from "../../context/AnimationContext.jsx";
import {motion} from "framer-motion";

function Audio() {
    const {containerVariants, itemVariants} = useAnimate()

    return (
        <motion.div className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"} variants={containerVariants}
                    initial="hidden" animate="show">
            <motion.img variants={itemVariants}
                        className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-2 row-span-1"}
                        src={foto} alt="foto advocaderaser"/>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Audio API (solo)</h2>
                <p className={"text-sm"}>Dit is een project wat ik heb gedaan, omdat het me leuk leek om iets te maken
                    wat audio visueel maakt. Hiervoor ben ik aan de slag gegaan met de Audio API. Voor de styling wou ik
                    eerst met normaal CSS werken, maar uiteindelijk besloot ik het toch met tailwind te doen. Dit omdat
                    ik merk dat ik nu ik tailwind wat beter begrijp ik hier sneller mee werk.</p>
                <p className={"text-sm pt-2"}>Ik heb de keuze gemaakt om twee keer de cirkel naast elkaar te zetten,
                    omdat het me leuk leek om te spelen met het spiegelen van de animatie. Bij de rechter heb ik ook wat
                    gespeeld met een soort glitch effect toe te voegen als er een grote bass is. Dit geeft best wel een
                    cool effect.</p>
            </motion.article>

            <motion.article variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 row-span-1 flex flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>Tools & talen:</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-brands fa-js"></i></td>
                            <td className={"w-8/9"}>Javascript</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Tailwind CSS</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://chrisieee.github.io/Audio-visual-experience/" target={"_blank"}>Live project</a>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/Audio-visual-experience" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Github</a>
                </div>
            </motion.article>
        </motion.div>
    )
}

export default Audio