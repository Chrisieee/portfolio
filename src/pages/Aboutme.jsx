function About() {
    return (
        <>
            <section className={"mx-4 grid grid-cols-4 gap-4 h-full"}>
                <article
                    className={"shadow-lg rounded-2xl p-4 bg-[url(./images/christa.jpg)] bg-top bg-cover row-span-3"}></article>

                <article className={"shadow-lg  rounded-2xl p-4 bg-blue-400 col-span-2 row-span-3"}>
                    <h2 className={"text-xl font-bold"}>Wie is Christa?</h2>
                    <p>test</p>
                </article>

                <article
                    className={"shadow-lg rounded-2xl p-4 bg-blue-500 flex flex-col gap-1 justify-between row-span-3"}>
                    <h2 className={"text-xl font-bold"}>Contact</h2>
                    <a href="assets/ChristaPol_CV_01-2026.pdf" download={"ChristaPol_CV_01-2026.pdf"}>Download CV</a>
                    <div className={"flex gap-5 justify-center"}>
                        <a className={"text-5xl"} href="mailto:christa_pol1@hotmail.com"><i
                            className="fa-solid fa-envelope"></i></a>
                        <a className={"text-5xl"} href={"https://www.linkedin.com/in/christa-pol/"}
                           target={"_blank"}><i className="fa-brands fa-linkedin"></i></a>
                        <a className={"text-5xl"} href={"https://github.com/Chrisieee"} target={"_blank"}><i
                            className="fa-brands fa-github"></i></a>
                    </div>
                </article>

                <article className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-4 content-center text-center"}>
                    <h3 className={"text-2xl font-bold"}>Ervaring</h3>
                </article>

                <article className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-3 row-span-2"}>
                    <h3 className={"text-lg font-bold"}>Skills:</h3>
                    <p>- Webdesign</p>
                    <p>- Web development</p>
                    <p>- Mediavormgeving</p>
                    <p>- 3D art</p>
                </article>
                <article className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-5 row-span-2"}>
                    <div>
                        <h3 className={"text-lg font-bold pb-3"}>Design:</h3>
                        <table className={"w-full"}>
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
                        </table>
                    </div>
                </article>
                <article className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-3 row-span-2"}>
                    <h3 className={"text-lg font-bold"}>Front-end:</h3>
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
                </article>
                <article className={"shadow-lg rounded-2xl p-4 bg-blue-300 flex flex-col gap-5 row-span-2"}>
                    <div>
                        <h3 className={"text-lg font-bold"}>Back-end:</h3>
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
                        <h3 className={"text-lg font-bold pb-3"}>Database:</h3>
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
                </article>
            </section>
        </>
    )
}

export default About