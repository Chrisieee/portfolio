import {useTranslation} from "react-i18next";

function Design() {
    const {t} = useTranslation()

    return (
        <table className={"w-full"}>
            <tbody>
            <tr>
                <td><i className="fa-brands fa-figma"></i></td>
                <td className={"w-8/9"}>Figma</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-pen"></i></td>
                <td className={"w-8/9"}>Adobe Photoshop</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-pen"></i></td>
                <td className={"w-8/9"}>Adobe Illustrator</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-pen"></i></td>
                <td className={"w-8/9"}>Adobe After Affects</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-pen"></i></td>
                <td className={"w-8/9"}>Adobe Premiere Pro</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Design