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
            y: 40,
            scale: 0.98
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
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