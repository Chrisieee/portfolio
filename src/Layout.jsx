import './index.css'
import {Link, Outlet} from "react-router";
import {useLanguage} from "./context/Language.jsx";

function Layout() {
    const {languageChange, language} = useLanguage()

    return (
        <div className={"flex flex-col justify-between max-w-screen h-screen"}>
            <header
                className={"my-2 mx-4 px-5 p-2 rounded-2xl bg-blue-400 flex justify-between content-center shadow-lg"}>
                <Link to={"/"}><h1 className={"text-4xl hover:text-blue-200 font-heading"}>Christa</h1></Link>
                <div className={"content-center"}>
                    <nav className={"flex justify-between gap-5"}>
                        <Link className={"text-2xl hover:text-blue-200"}
                              to={"/projects"}>{language === "NL" ? "Projecten" : "Projects"}</Link>
                        <Link className={"text-2xl hover:text-blue-200"}
                              to={"/about-me"}>{language === "NL" ? "Over mij" : "About me"}</Link>
                        <button className={"text-2xl hover:text-blue-200"}
                                onClick={() => languageChange()}>{language === "NL" ? "EN" : "NL"}</button>
                    </nav>
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
