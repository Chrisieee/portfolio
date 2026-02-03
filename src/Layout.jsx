import './index.css'
import {Link, Outlet} from "react-router";
import {useLanguage} from "./context/Language.jsx";
import {useEffect, useState} from "react";

function Layout() {
    const {languageChange, language} = useLanguage()
    const [nav, setNav] = useState(false)

    return (
        <div className={"flex flex-col justify-between max-w-screen h-screen"}>
            <header
                className={"my-2 mx-4 px-5 p-2 rounded-2xl bg-blue-400 flex flex-col md:flex-row justify-between content-center shadow-lg text-center"}>
                <div className={"md:hidden block absolute left-6/7 top-5"}>
                    <i onClick={async () => {
                        nav ? await setNav(false) : await setNav(true)
                    }} className="fa-solid fa-bars text-3xl"></i>
                </div>
                <Link to={"/"}><h1 className={"text-4xl hover:text-blue-200 font-heading"}>Christa</h1></Link>
                <div className={"content-center"}>
                    <div className={nav ? "block md:block" : "hidden md:block"}>
                        <nav
                            className={"flex flex-col md:flex-row md:justify-between gap-1 md:gap-5"}>
                            <Link className={"text-2xl hover:text-blue-200"}
                                  to={"/projects"}>{language === "NL" ? "Projecten" : "Projects"}</Link>
                            <Link className={"text-2xl hover:text-blue-200"}
                                  to={"/about-me"}>{language === "NL" ? "Over mij" : "About me"}</Link>
                            <button className={"text-2xl hover:text-blue-200"}
                                    onClick={() => languageChange()}>{language === "NL" ? "EN" : "NL"}</button>
                        </nav>
                    </div>
                </div>
            </header>

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
