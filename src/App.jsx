import './index.css'
import {Link} from "react-router";

function App() {

    return (
        <div className={"h-screen flex flex-col justify-between w-screen"}>
            <header
                className={"my-2 mx-4 px-5 p-2 rounded-2xl bg-blue-400 flex justify-between content-center shadow-lg"}>
                <h1 className={"text-4xl font-bold"}>Christa</h1>
                <div className={"content-center"}>
                    <nav className={"flex justify-between gap-5"}>
                        <a className={"text-lg"} href={""}>Projecten</a>
                        <a className={"text-lg"} href={""}>Over mij</a>
                        <a className={"text-lg"} href={""}>Contact</a>
                    </nav>
                </div>

            </header>

            <main className={"w-screen flex flex-col gap-2 h-full my-2"}>
                <section className={"mx-4 grid grid-cols-4 gap-4 h-full"}>
                    <div
                        className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-2 row-span-2 flex flex-col justify-center gap-2"}>
                        <p className={"text-4xl"}><i className="fa-solid fa-quote-left"></i></p>
                        <h2 className={"text-xl font-bold"}>Je leert het meest als je uit je comfort zone stapt.</h2>
                        <p>Uitdaging aangaan vind ik het engst en het leukst om te doen. Je leert er een hoop van als je
                            nieuwe dingen probeert.</p>
                        <p className={"text-4xl text-right"}><i className="fa-solid fa-quote-right"></i></p>
                    </div>
                    <div
                        className={"shadow-lg rounded-2xl p-4 bg-[url(./images/christa.jpg)] bg-top bg-cover row-span-2"}></div>
                    <div className={"shadow-lg  rounded-2xl p-4 bg-blue-300 row-span-3"}>
                        <h2 className={"text-xl font-bold"}>Projecten:</h2>
                        <p>Test</p>
                    </div>
                    <div className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between"}>
                        <div>
                            <h2 className={"text-xl font-bold"}>Vragen? </h2>
                            <h2 className={"text-xl font-bold pb-2"}>Neem contact op:</h2>
                        </div>
                        <div className={"flex gap-5 justify-center"}>
                            <a className={"text-5xl"} href="mailto:christa_pol1@hotmail.com"><i
                                className="fa-solid fa-envelope"></i></a>
                            <a className={"text-5xl"} href={"https://www.linkedin.com/in/christa-pol/"}
                               target={"_blank"}><i
                                className="fa-brands fa-linkedin"></i></a>
                            <a className={"text-5xl"} href={"https://github.com/Chrisieee"} target={"_blank"}><i
                                className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className={"shadow-lg  rounded-2xl p-4 bg-blue-400 col-span-2"}>
                        <h2 className={"text-xl font-bold"}>Wie is Christa?</h2>
                        <p>test</p>
                    </div>
                </section>
                <section
                    className={"my-2 mx-4 text-center px-5 py-4 rounded-2xl bg-blue-400 flex justify-evenly align-middle"}>
                    <p className={"text-7xl"}><i className="fa-brands fa-html5"></i></p>
                    <p className={"text-7xl"}><i className="fa-brands fa-css3-alt"></i></p>
                    <p className={"text-7xl"}><i className="fa-brands fa-js"></i></p>
                    <p className={"text-7xl"}><i className="fa-brands fa-php"></i></p>
                    {/*<p className={"text-7xl text-gray-700"}><i className="fa-brands fa-python"></i></p>*/}
                    <p className={"text-7xl"}><i className="fa-brands fa-react"></i></p>
                    <p className={"text-7xl"}><i className="fa-brands fa-laravel"></i></p>
                </section>
            </main>

            {/*<footer className={"my-2 mx-4 text-center px-5 p-2 rounded-2xl bg-blue-400 flex justify-between"}>*/}
            {/*    <h2 className={"text-3xl font-bold"}>Skills:</h2>*/}
            {/*</footer>*/}
        </div>
    )
}

export default App
