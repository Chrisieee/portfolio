import {useTranslation} from "react-i18next";

function Game() {
    const {t} = useTranslation()

    return (
        <table className={"w-full"}>
            <tbody>
            <tr>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>Autodesk Maya</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>Blender</td>
            </tr>
            <tr>
                <td><i className="fa-regular fa-file-code"></i></td>
                <td className={"w-8/9"}>Excalibur Game engine</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>Unity</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>Godot</td>
            </tr>
            <tr className={"text-gray-700"}>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>{t("about.basic")} Unreal</td>
            </tr>
            <tr className={"text-gray-700"}>
                <td><i className="fa-regular fa-file-code"></i></td>
                <td className={"w-8/9"}>{t("about.basic")} C#</td>
            </tr>
            <tr className={"text-gray-700"}>
                <td><i className="fa-regular fa-file-code"></i></td>
                <td className={"w-8/9"}>{t("about.basic")} GDScript</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Game