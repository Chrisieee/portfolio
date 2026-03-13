import {H2} from "../components/headings.jsx";

function Error() {
    return (
        <section
            className={"mx-4 pt-10 shadow-lg rounded-2xl p-4 bg-blue-400 flex flex-col text-center gap-10 grow h-full"}>
            <h2 className={"text-5xl font-heading"}>404</h2>
            <p className={"text-2xl"}>Pagina niet gevonden</p>
        </section>
    )
}

export default Error