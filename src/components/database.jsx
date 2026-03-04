import {useAbout} from "../context/AboutContext.jsx";

function Database() {
    const {about} = useAbout()

    return (
        <table className={"w-full"}>
            <tbody>
            <tr>
                <td><i className="fa-solid fa-database"></i></td>
                <td className={"w-8/9"}>MySQL</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-database"></i></td>
                <td className={"w-8/9"}>SQLite</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-database"></i></td>
                <td className={"w-8/9"}>MongoDB</td>
            </tr>
            <tr>
                <td><i className="fa-solid fa-database"></i></td>
                <td className={"w-8/9"}>Mongoose</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Database