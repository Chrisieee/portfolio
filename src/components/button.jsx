import {Link} from "react-router";
import {useLanguage} from "../context/Language.jsx";
import {useAbout} from "../context/AboutContext.jsx";

export function Button({children, link}) {
    return (
        <Link
            className="p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 hover:scale-105"
            to={link}>{children}</Link>
    )
}

export function InfoButton({link}) {
    const {language} = useLanguage()
    return (
        <Link
            className="p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 hover:scale-105"
            to={link}>{language === "NL" ? "Meer informatie" : "More information"}</Link>
    )
}

export function LiveButton({link}) {
    return (
        <Link
            className="p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 hover:scale-105"
            to={link} target="_blank">
            <i className="fa-solid fa-circle text-red-500"></i> Live project</Link>
    )
}

export function GitButton({children, link}) {
    return (
        <Link
            className="p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 hover:scale-105 flex-1"
            to={link} target="_blank">
            <i className="fa-brands fa-github"></i>{children}</Link>
    )
}

export function ShowcaseButton({link}) {
    return (
        <Link
            className="p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 hover:scale-105"
            to={link} target="_blank">
            <i className="fa-solid fa-tv"></i> Project showcase</Link>
    )
}

export function CvButton() {
    const {about} = useAbout()
    return (
        <a
            className="p-2 rounded-xl bg-blue-300 text-center border-2 border-blue-400 hover:bg-blue-400 hover:border-blue-300 hover:scale-105"
            href="/ChristaPol_CV_01-2026.pdf"
            download={"ChristaPol_CV_01-2026.pdf"}>Download
            CV ({about.cv})</a>
    )
}