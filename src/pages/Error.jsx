import {useEffect} from "react";
import {useTranslation} from "react-i18next";

function Error() {
    const {t} = useTranslation()

    useEffect(() => {
        document.title = `Christa | ${t("error")}`
    }, [])

    return (
        <section
            className={"mx-4 pt-10 shadow-lg rounded-2xl p-4 bg-blue-400 flex flex-col text-center gap-10 grow h-full"}>
            <h2 className={"text-5xl font-heading"}>404</h2>
            <p className={"text-2xl"}>{t("error")}</p>
        </section>
    )
}

export default Error