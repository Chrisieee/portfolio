import './index.css'
import {Outlet} from "react-router";
import Header from "./components/header.jsx";
import {AnimatePresence, motion} from "framer-motion";

function Layout() {
    return (
        <div className={"flex flex-col justify-between max-w-screen h-screen"}>
            <Header/>

            <main className={"max-w-screen flex flex-col gap-2 my-2 flex-grow"}>
                <AnimatePresence mode="wait">
                    <motion.div key={location.pathname} className={"flex-grow"}
                                transition={{type: "spring", stiffness: 100, damping: 20}}>
                        <Outlet/>
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className={"my-2 mx-4 px-5 py-5 rounded-2xl bg-blue-400 text-center shadow-lg"}>
                <p className={"font-heading text-2xl"}>©2026 - Chrisieee</p>
            </footer>
        </div>
    )
}

export default Layout
