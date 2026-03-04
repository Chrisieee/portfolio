import {motion} from "framer-motion";
import {useAnimate} from "../context/AnimationContext.jsx";

function ProjectCard({children}) {
    const {containerVariants, itemVariants} = useAnimate()

    return (
        <motion.section layout="position" variants={itemVariants}
                        className={"gap-2 shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 content-center text-center flex-col flex justify-between"}>
            {children}
        </motion.section>
    )
}

export default ProjectCard