import {Link} from "react-router";
import {useLanguage} from "../context/Language.jsx";
import {useState} from "react";

function Header() {
    const {languageChange, language} = useLanguage()
    const [nav, setNav] = useState(false)

    return (
        <header
            className={"my-2 mx-4 px-5 p-2 rounded-2xl bg-blue-400 flex flex-col md:flex-row justify-between content-center shadow-lg text-center"}>
            <div className={"md:hidden block absolute left-6/7 top-5"}>
                <i onClick={() => {
                    nav ? setNav(false) : setNav(true)
                }} className="fa-solid fa-bars text-3xl"></i>
            </div>
            <Link onClick={() => {
                nav ? setNav(false) : setNav(true)
            }} to={"/"}><h1 className={"text-4xl hover:text-blue-200 font-heading"}>Christa</h1></Link>
            <div className={"content-center"}>
                <div className={nav ? "block md:block" : "hidden md:block"}>
                    <nav role="navigation"
                         className={"flex flex-col md:flex-row md:justify-between gap-1 md:gap-5"}>
                        <Link onClick={() => {
                            nav ? setNav(false) : setNav(true)
                        }} className={"text-2xl hover:text-blue-200"}
                              to={"/projects"}>{language === "NL" ? "Projecten" : "Projects"}</Link>
                        <Link onClick={() => {
                            nav ? setNav(false) : setNav(true)
                        }} className={"text-2xl hover:text-blue-200"}
                              to={"/about-me"}>{language === "NL" ? "Over mij" : "About me"}</Link>
                        <button className={"text-2xl hover:text-blue-200"}
                                onClick={() => languageChange()}>{language === "NL" ? "EN" : "NL"}</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header