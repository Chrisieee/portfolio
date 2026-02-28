import './index.css'
import {Outlet} from "react-router";
import Header from "./components/header.jsx";

function Layout() {
    return (
        <div className={"flex flex-col justify-between max-w-screen h-screen"}>
            <Header/>

            <main className={"max-w-screen flex flex-col gap-2 my-2 flex-grow"}>
                <Outlet/>
            </main>

            <footer className={"my-2 mx-4 px-5 py-5 rounded-2xl bg-blue-400 text-center shadow-lg"}>
                <p className={"font-heading text-2xl"}>©2026 - Chrisieee</p>
            </footer>
        </div>
    )
}

export default Layout
