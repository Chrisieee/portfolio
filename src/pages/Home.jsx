import {useLanguage} from "../context/Language.jsx";
import pf from "../images/christa.jpg";

function Home() {
    const {home} = useLanguage()

    return (
        <section className={"mx-4 grid grid-cols-4 gap-4 h-full"}>
            <article
                className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-2 row-span-2 flex flex-col justify-center gap-2"}>
                <p className={"text-4xl"}><i className="fa-solid fa-quote-left"></i></p>
                <h2 className={"text-xl font-bold"}>{home.quote}</h2>
                <p>{home.quoteInfo}</p>
                <p className={"text-4xl text-right"}><i className="fa-solid fa-quote-right"></i></p>
            </article>

            <img className={"h-full w-full object-cover object-top rounded-xl col-span-1 row-span-2"} src={pf}
                 alt="foto christa"/>

            <article className={"shadow-lg rounded-2xl p-4 bg-blue-300 row-span-3 flex flex-col gap-3"}>
                <h2 className={"text-xl font-bold"}>{home.projects}</h2>
            </article>

            <article className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between"}>
                <div>
                    <h2 className={"text-xl font-bold"}>{home.contact1}</h2>
                    <h2 className={"text-xl font-bold pb-2"}>{home.contact2}</h2>
                </div>
                <div className={"flex gap-5 justify-center"}>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href="mailto:christa_pol1@hotmail.com"><i
                        className="fa-solid fa-envelope"></i></a>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href={"https://www.linkedin.com/in/christa-pol/"}
                       target={"_blank"}><i
                        className="fa-brands fa-linkedin"></i></a>
                    <a className={"text-5xl text-blue-300 hover:text-blue-400"}
                       href={"https://github.com/Chrisieee"} target={"_blank"}><i
                        className="fa-brands fa-github"></i></a>
                </div>
            </article>

            <article className={"shadow-lg  rounded-2xl p-4 bg-blue-400 col-span-2"}>
                <h2 className={"text-xl font-bold"}>{home.bio}</h2>
                <p>{home.bioInfo}</p>
            </article>
        </section>
    )
}

export default Home