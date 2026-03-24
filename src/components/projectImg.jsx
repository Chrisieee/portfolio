import {motion} from "framer-motion";
import {useAnimate} from "../context/AnimationContext.jsx";

function ProjectImg({src, project}) {
    const {itemVariants} = useAnimate()

    return (
        <motion.img variants={itemVariants}
                    className={"border shadow-lg h-full w-full object-cover rounded-xl col-span-2 md:col-span-1 row-span-1"}
                    src={src} alt={`foto ${project}`}/>
    )
}

export default ProjectImg