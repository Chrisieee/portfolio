import {useTranslation} from "react-i18next";

function BackEnd() {
    const {t} = useTranslation()

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
            <tr className={"text-gray-700"}>
                <td><i className="fa-brands fa-python"></i></td>
                <td className={"w-8/9"}>{t("about.basic")} Python</td>
            </tr>
            </tbody>
        </table>
    )
}

export default BackEnd