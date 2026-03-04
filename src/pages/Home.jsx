import pf from "../images/christa.jpg";
import {useHome} from "../context/HomeContext.jsx";
import {useAnimate} from "../context/AnimationContext.jsx";
import {motion} from "framer-motion";
import H2 from "../components/h2.jsx";
import SocialLinks from "../components/socialLinks.jsx";
import ProjectImgHome from "../components/projectImgHome.jsx";

function Home() {
    const {home} = useHome()
    const {containerVariants, itemVariants} = useAnimate()

    return (
        <motion.div
            className="mx-4 grid md:grid-cols-4 grid-cols-2 gap-4 h-full"
            variants={containerVariants} initial="hidden" animate="show">
            <motion.section variants={itemVariants}
                            className=" shadow-lg rounded-2xl p-4 bg-blue-400 md:col-span-2 col-span-1 row-span-2 flex flex-col justify-center gap-2">
                <p className={"text-4xl"}><i className="fa-solid fa-quote-left"></i></p>
                <H2>{home.quote}</H2>
                <p>{home.quoteInfo}</p>
                <p className={"text-4xl text-right"}><i className="fa-solid fa-quote-right"></i></p>
            </motion.section>

            <motion.img variants={itemVariants}
                        className={"h-full w-full object-cover object-top rounded-xl col-span-1 row-span-2"} src={pf}
                        alt="foto christa"/>
            <motion.section variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-300 row-span-3 flex flex-col gap-3 justify-between"}>
                <H2>{home.projects}</H2>
                <ProjectImgHome/>
            </motion.section>

            <motion.section variants={itemVariants}
                            className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between row-span-1"}>
                <div>
                    <H2>{home.contact1}</H2>
                    <H2 className={"pb-2"}>{home.contact2}</H2>
                </div>
                <div className={"flex flex-col md:flex-row gap-5 justify-center items-center"}>
                    <SocialLinks/>
                </div>
            </motion.section>

            <motion.section
                variants={itemVariants}
                className={"shadow-lg  rounded-2xl p-4 bg-blue-400 md:col-span-2 col-span-1 md:row-span-1 row-span-2"}>
                <H2>{home.bio}</H2>
                <p>{home.bioInfo}</p>
            </motion.section>
        </motion.div>
    )
}

export default Home