import {createContext, useContext} from "react";

const AnimateContext = createContext()

export function AnimateProvider({children}) {

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: 25,
            scale: 0.9,
            filter: "blur(2px)"
        },
        show: {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 14
            }
        }
    };


    return (
        <AnimateContext.Provider value={{
            containerVariants, itemVariants
        }}>
            {children}
        </AnimateContext.Provider>
    )
}

export function useAnimate() {
    return useContext(AnimateContext)
}