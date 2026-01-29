function Home() {
    return (
        <>
            <section className={"mx-4 grid grid-cols-4 gap-4 h-full"}>
                <article
                    className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-2 row-span-2 flex flex-col justify-center gap-2"}>
                    <p className={"text-4xl"}><i className="fa-solid fa-quote-left"></i></p>
                    <h2 className={"text-xl font-bold"}>Je leert het meest als je uit je comfort zone stapt.</h2>
                    <p>Uitdaging aangaan vind ik het engst en het leukst om te doen. Je leert er een hoop van als je
                        nieuwe dingen probeert.</p>
                    <p className={"text-4xl text-right"}><i className="fa-solid fa-quote-right"></i></p>
                </article>

                <article
                    className={"shadow-lg rounded-2xl p-4 bg-[url(./images/christa.jpg)] bg-top bg-cover row-span-2"}></article>

                <article className={"shadow-lg rounded-2xl p-4 bg-blue-300 row-span-3 flex flex-col gap-3"}>
                    <h2 className={"text-xl font-bold"}>Ervaring:</h2>
                    <div>
                        <h3 className={"text-lg font-bold"}>Skills:</h3>
                        <p>- Webdesign</p>
                        <p>- Web development</p>
                        <p>- Mediavormgeving</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <h3 className={"text-lg font-bold"}>Tools & talen:</h3>
                        <div>
                            <h4 className={"text-lg underline"}>Design:</h4>
                            <table className={"w-full"}>
                                <tr>
                                    <td><i className="fa-brands fa-figma"></i></td>
                                    <td className={"w-8/9"}>Figma</td>
                                </tr>
                                <tr>
                                    <td><i className="fa-solid fa-pen"></i></td>
                                    <td className={"w-8/9"}>Adobe pakket</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <h4 className={"text-lg underline"}>Front-end:</h4>
                            <table className={"w-full"}>
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
                                    <td><i className="fa-brands fa-react"></i></td>
                                    <td className={"w-8/9"}>React</td>
                                </tr>
                                <tr>
                                    <td><i className="fa-regular fa-file-code"></i></td>
                                    <td className={"w-8/9"}>Tailwind CSS</td>
                                </tr>
                                <tr className={"text-gray-700"}>
                                    <td><i className="fa-brands fa-python"></i></td>
                                    <td className={"w-8/9"}>Basis Python</td>
                                </tr>
                                <tr className={"text-gray-700"}>
                                    <td><i className="fa-regular fa-file-code"></i></td>
                                    <td className={"w-8/9"}>Basis C#</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <h4 className={"text-lg underline"}>Back-end:</h4>
                            <table className={"w-full"}>
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
                            </table>
                        </div>
                        <div>
                            <h4 className={"text-lg underline"}>Database:</h4>
                            <table className={"w-full"}>
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
                            </table>
                        </div>
                    </div>
                </article>

                <article className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between"}>
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
                </article>

                <article className={"shadow-lg  rounded-2xl p-4 bg-blue-400 col-span-2"}>
                    <h2 className={"text-xl font-bold"}>Wie is Christa?</h2>
                    <p>test</p>
                </article>
            </section>
            {/*<section*/}
            {/*    className={"my-2 mx-4 text-center px-5 py-4 rounded-2xl bg-blue-400 flex justify-evenly align-middle"}>*/}
            {/*</section>*/}
        </>
    )
}

export default Home