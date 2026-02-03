import foto from '../../images/Gamereviews.png'
import foto2 from '../../images/full/Full1.png'
import foto3 from '../../images/full/Full2.png'
import foto4 from '../../images/full/Full3.png'
import foto5 from '../../images/full/Full4.png'

function Gamereviews() {

    return (
        <section className={"mx-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-full"}>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-2 row-span-1"}
                src={foto} alt="foto advocaderaser"/>

            <article className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Gamereviews (solo)</h2>
                <p className={"text-sm"}>Dit was een full stack project op school. We moesten de back-end schrijven met
                    Express met een MongoDB database. De front-end is gemaakt met react.</p>
                <p className={"text-sm pt-2"}>Ik heb best wel wat dingen gedaan die ik nog nooit gedaan heb. Zo had ik
                    nog nooit met Express JS, MongoBD en mongoose gewerkt. Ook was React nieuw voor mij. Daarnaast ben
                    ik de uitdaging aangegaan om veel extra onderdelen toe te voegen. Denk aan pagination, filteren en
                    het werken met relaties.</p>
            </article>

            <article
                className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 row-span-1 flex flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>Tools & talen:</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-brands fa-react"></i></td>
                            <td className={"w-8/9"}>React</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Tailwind CSS</td>
                        </tr>
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Express JS</td>
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
                </div>
                <div className={"flex flex-col gap-2"}>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/gamereviews-react" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Front-end</a>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/gamereviews-express" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Back-end</a>
                </div>
            </article>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto2} alt="foto advocaderaser"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto3} alt="foto advocaderaser"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto4} alt="foto advocaderaser"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto5} alt="foto advocaderaser"/>

        </section>
    )
}

export default Gamereviews