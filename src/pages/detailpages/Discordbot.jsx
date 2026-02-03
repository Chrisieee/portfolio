import foto from '../../images/Discord.png'

function Discordbot() {

    return (
        <div className={"mx-4 grid grid-cols-4 gap-4 h-full"}>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                src={foto} alt="foto advocaderaser"/>

            <article className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Discord bot (solo)</h2>
                <p className={"text-sm"}>Dit is een Work in Progress project. Ik ben een eigen discord bot aan het
                    bouwen, omdat ik een beetje gek word van alle verschillende bots die ik in mijn server heb. Hierom
                    ben ik bezig met een all in one discord te bouwen.</p>
                <p className={"text-sm pt-2"}>Ik ben begonnen met een simpele melding als ik live ben op mijn kanaal.
                    Dit heb ik gedaan met de Twitch API, omdat je daarin request kan doen naar de server om te checken
                    of een kanaal live is. Daarna ben ik gaan spelen om deze melding met een embedded message te
                    maken.</p>
            </article>

            <article
                className={"shadow-lg rounded-2xl p-4 bg-blue-300 col-span-1 row-span-1 flex flex-col gap-4 justify-between"}>
                <div>
                    <h3 className={"text-2xl font-heading pb-2"}>Tools & talen:</h3>
                    <table className={"w-full"}>
                        <tbody className={"text-lg"}>
                        <tr>
                            <td><i className="fa-brands fa-js"></i></td>
                            <td className={"w-8/9"}>Javascript</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/Hulpie" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Github</a>
                </div>
            </article>
        </div>
    )
}

export default Discordbot