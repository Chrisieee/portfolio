import {useAbout} from "../../context/AboutContext.jsx";

function BackEnd() {
    const {about} = useAbout()

    return (
        <table className={"w-full"}>
            <tbody>
            <tr>
                <td><i className="fa-brands fa-php"></i></td>
                <td className={"w-8/9"}>PHP</td>
            </tr>
            <tr>
                <td><i className="fa-brands fa-laravel"></i></td>
                <td className={"w-8/9"}>Laravel</td>
            </tr>
            <tr>
                <td><i className="fa-regular fa-file-code"></i></td>
                <td className={"w-8/9"}>Express JS</td>
            </tr>
            </tbody>
        </table>
    )
}

export default BackEnd