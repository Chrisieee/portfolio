import './index.css'
import {Link, Outlet} from "react-router";
import {useLanguage} from "./context/Language.jsx";

function Layout() {
    const {languageChange, language} = useLanguage()

    return (
        <div className={"h-screen flex flex-col justify-between max-w-screen"}>
            <header
                className={"my-2 mx-4 px-5 p-2 rounded-2xl bg-blue-400 flex justify-between content-center shadow-lg"}>
                <Link to={"/"}><h1 className={"text-4xl font-bold hover:text-blue-200"}>Christa</h1></Link>
                <div className={"content-center"}>
                    <nav className={"flex justify-between gap-5"}>
                        <Link className={"text-lg hover:text-blue-200"}
                              to={"/projecten"}>{language === "NL" ? "Projecten" : "Projects"}</Link>
                        <Link className={"text-lg hover:text-blue-200"}
                              to={"/over-mij"}>{language === "NL" ? "Over mij" : "About me"}</Link>
                        <button className={"text-lg hover:text-blue-200"}
                                onClick={() => languageChange()}>{language === "NL" ? "EN" : "NL"}</button>
                    </nav>
                </div>
            </header>

            <main className={"max-w-screen flex flex-col gap-2 h-full my-2"}>
                <Outlet/>
            </main>
            
            <footer className={"my-2 mx-4 px-5 p-2 rounded-2xl bg-blue-400 text-center shadow-lg"}>
                <p className={"font-bold text-xl"}>©2026 - Christa</p>
            </footer>
        </div>
    )
}

export default Layout
