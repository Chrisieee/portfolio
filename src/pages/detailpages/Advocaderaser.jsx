import foto from '../../images/Advocaderaser.png'
import foto2 from '../../images/advo/Advo1.png'
import foto3 from '../../images/advo/Advo2.png'
import foto4 from '../../images/advo/Advo3.png'
import foto5 from '../../images/advo/Advo4.png'

function Advocaderaser() {

    return (
        <div className={"mx-4 grid grid-cols-4 gap-4 h-full"}>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-left rounded-xl col-span-2 row-span-1"}
                src={foto} alt="foto advocaderaser"/>

            <article className={"shadow-lg rounded-2xl p-4 bg-blue-400 col-span-1 row-span-1"}>
                <h2 className={"text-3xl font-heading pb-2"}>Advocaderaser (solo)</h2>
                <p className={"text-sm"}>Dit was een school project waar we voor het eerst een game hebben gemaakt. We
                    hebben hier excalibur
                    voor moeten gebruiken, omdat dit met Javacript werkt. Ook was dit de eerste ervaring met OOP
                    programmeren.</p>
                <p className={"text-sm pt-2"}>Ik heb de keuze gemaakt om de controls ook voor controller te maken, omdat
                    ik dit een leuke extra uitdaging vond. Hier heb ik dan ook een mooi cijfer voor gekregen.</p>
                <p className={"text-sm pt-2"}>Als ik er nu op terug kijk ben ik met het meeste wel blij vooral, omdat
                    dit de eerste keer was. Maar ik had bijvoorbeeld de score tekst niet transparant gemaakt. Ook zou ik
                    meer levels hebben gemaakt als ik terug in de tijd zou kunnen. Dit is een project wat ik nog in
                    Godot wil gaan uitwerken.</p>
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
                       href="https://chrisieee.github.io/Advocaderaser/" target={"_blank"}>Live project</a>
                    <a className={"text-center p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300"}
                       href="https://github.com/Chrisieee/Advocaderaser" target={"_blank"}><i
                        className="fa-brands fa-github"></i> Github</a>
                </div>
            </article>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto2} alt="foto advocaderaser"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-right rounded-xl col-span-1 row-span-1"}
                src={foto3} alt="foto advocaderaser"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-right rounded-xl col-span-1 row-span-1"}
                src={foto4} alt="foto advocaderaser"/>
            <img
                className={"border-1 shadow-lg h-full w-full object-cover object-center rounded-xl col-span-1 row-span-1"}
                src={foto5} alt="foto advocaderaser"/>

        </div>
    )
}

export default Advocaderaser