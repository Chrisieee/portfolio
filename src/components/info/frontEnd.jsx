import {useTranslation} from "react-i18next";

function FrontEnd() {
    const {t} = useTranslation()

    return (
        <table className={"w-full"}>
            <tbody>
            <tr>
                <td><i className="fa-brands fa-html5"></i></td>
                <td className={"w-8/9"}>HTML</td>
            </tr>
            <tr>
                <td><i className="fa-brands fa-css3-alt"></i></td>
                <td className={"w-8/9"}>CSS</td>
            </tr>
            <tr>
                <td><i className="fa-brands fa-js"></i></td>
                <td className={"w-8/9"}>Javascript</td>
            </tr>
            <tr>
                <td><i className="fa-regular fa-file-code"></i></td>
                <td className={"w-8/9"}>Tailwind CSS</td>
            </tr>
            <tr>
                <td><i className="fa-brands fa-react"></i></td>
                <td className={"w-8/9"}>React</td>
            </tr>
            <tr>
                <td><i className="fa-regular fa-file-code"></i></td>
                <td className={"w-8/9"}>Typescript</td>
            </tr>
            <tr>
                <td><i className="fa-brands fa-react"></i></td>
                <td className={"w-8/9"}>React Native</td>
            </tr>
            </tbody>
        </table>
    )
}

export default FrontEnd