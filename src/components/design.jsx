import {useAbout} from "../context/AboutContext.jsx";

function Design() {
    const {about} = useAbout()

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
            <tr>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>Autodesk Maya</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>Blender</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>Unity</td>
            </tr>
            <tr className={"text-gray-700"}>
                <td><i className="fa-solid fa-cube"></i></td>
                <td className={"w-8/9"}>{about.basic} Unreal</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Design