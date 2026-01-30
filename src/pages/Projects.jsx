import {Link} from "react-router";
import gamereview from "../images/Gamereviews.png";
import signatuur from "../images/Signatuur.png";
import advocaderaser from "../images/Advocaderaser.png";

function Projects() {
    return (
        <section className={"mx-4 grid grid-cols-3 gap-4 h-full"}>
            <article
                className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-3 content-center text-center"}>
                <h2 className={"text-2xl font-bold"}>Projecten</h2>
            </article>

            <article
                className={"gap-2 shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 content-center text-center flex-col flex justify-between"}>
                <div>
                    <h3 className={"text-2xl font-bold pb-2"}>Gamereviews (school)</h3>
                    <img className={"object-cover object-center rounded-xl w-full h-50 border-2"} src={gamereview}
                         alt="foto gamereview"/>
                </div>
                <div className={"flex justify-evenly pt-2"}>
                    <p className={"text-lg"}><i className="fa-brands fa-react text-2xl"></i> React</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Tailwind</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Express JS</p>
                </div>
                <p>Dit is een full stack project van school. Hierbij moesten we de front-end en de back-end zelf
                    maken.</p>
                <div className={"flex-col flex gap-2"}>
                    <Link
                        className={"p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                        to={"/projects"}>Meer informatie</Link>
                    <div className={"w-full flex gap-2"}>
                        <a className={"p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 flex-grow"}
                           href="https://github.com/Chrisieee/gamereviews-react" target={"_blank"}>Front-end</a>
                        <a className={"p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 flex-grow"}
                           href="https://github.com/Chrisieee/gamereviews-express" target={"_blank"}>Back-end</a>
                    </div>
                </div>
            </article>

            <article
                className={"gap-2 shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 content-center text-center flex-col flex justify-between"}>
                <div>
                    <h3 className={"text-2xl font-bold pb-2"}>Signatuur game (school)</h3>
                    <img className={"object-cover object-left rounded-xl w-full h-50 border-2"} src={signatuur}
                         alt="foto signatuur"/>
                </div>
                <div className={"flex justify-evenly pt-2"}>
                    <p className={"text-lg"}><i className="fa-brands fa-js text-2xl"></i> Javascript</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Excalibur</p>
                </div>
                <p>Dit was een project waar je een eigen vorm mocht kiezen om je groei te laten zien. In heb hiervoor
                    een simpele platformer gemaakt met verschillende werelden en levels.</p>
                <div className={"flex-col flex gap-2"}>
                    <Link
                        className={"p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                        to={"/projects"}>Meer informatie</Link>
                    <a className={"p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://chrisieee.github.io/signatuuropdracht-tle2/" target={"_blank"}>Live project</a>
                </div>
            </article>

            <article
                className={"gap-2 shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 content-center text-center flex-col flex justify-between"}>
                <div>
                    <h3 className={"text-2xl font-bold pb-2"}>Advocaderaser (school)</h3>
                    <img className={"object-cover object-left rounded-xl w-full h-50 border-2"} src={advocaderaser}
                         alt="foto advocaderaser"/>
                </div>
                <div className={"flex justify-evenly pt-2"}>
                    <p className={"text-lg"}><i className="fa-brands fa-js text-2xl"></i> Javascript</p>
                    <p className={"text-lg"}><i className="fa-regular fa-file-code text-2xl"></i> Excalibur</p>
                </div>
                <p>Voor dit project heb ik een simpele platformer gemaakt in de Excalibur game engine. Dit was een
                    project die ik heb gemaakt voor school.</p>
                <div className={"flex-col flex gap-2"}>
                    <Link
                        className={"p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                        to={"/projects/1"}>Meer informatie</Link>
                    <a className={"p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://chrisieee.github.io/Advocaderaser/" target={"_blank"}>Live project</a>
                </div>
            </article>
        </section>
    )
}

export default Projects