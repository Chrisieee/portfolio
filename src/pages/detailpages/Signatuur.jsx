import foto from '../../images/Signatuur.png'
import foto2 from '../../images/sign/Sign1.png'
import foto3 from '../../images/sign/Sign2.png'
import foto4 from '../../images/sign/Sign3.png'
import foto5 from '../../images/sign/Sign4.png'

function Signatuur() {

    return (
        <section className={"mx-4 grid grid-cols-4 gap-4 h-full"}>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                src={foto} alt="foto signatuur"/>

            <article className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Signatuur (solo)</h2>
                <p className={"text-sm"}>Voor dit project moesten we onze groei die we hadden doormaakt in het afgelopen
                    halfjaar. Hiervoor waren we vrij om een vorm te kiezen en mij leek het een leuke uitdaging om een
                    game te maken. Aangezien ik ervaring had met excalibur heb ik ervoor gekozen om hem hier mee te
                    maken</p>
                <p className={"text-sm pt-2"}>Als ik er nu op terug kijk ben ik middelmatig blij. Ik ben blij dat ik hem
                    af heb kunnen krijgen en dat hij is geworden wat ik voor ogen had. Ik had wel de levels wat
                    uitdagender en leuker te maken. Zo had ik bij de tweede wereld een nieuwe mechanic kunnen
                    toevoegen dat had het al wat leuker gemaakt.</p>
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
                        <tr>
                            <td><i className="fa-regular fa-file-code"></i></td>
                            <td className={"w-8/9"}>Excalibur Game engine</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-pen"></i></td>
                            <td className={"w-8/9"}>Procreate</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://chrisieee.github.io/signatuuropdracht-tle2/" target={"_blank"}>Live project</a>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/signatuuropdracht-tle2" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Github</a>
                </div>
            </article>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto2} alt="foto signatuur"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto3} alt="foto signatuur"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-left rounded-xl col-span-1 row-span-1"}
                src={foto4} alt="foto signatuur"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto5} alt="foto signatuur"/>
        </section>
    )
}

export default Signatuur