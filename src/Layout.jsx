import './index.css'
import {Link, Outlet} from "react-router";

function Layout() {

    return (
        <div className={"h-screen flex flex-col justify-between w-screen"}>
            <header
                className={"my-2 mx-4 px-5 p-2 rounded-2xl bg-blue-400 flex justify-between content-center shadow-lg"}>
                <Link to={"/"}><h1 className={"text-4xl font-bold"}>Christa</h1></Link>
                <div className={"content-center"}>
                    <nav className={"flex justify-between gap-5"}>
                        <Link className={"text-lg"} to={"/projecten"}>Projecten</Link>
                        <Link className={"text-lg"} to={"/over-mij"}>Over mij</Link>
                    </nav>
                </div>
            </header>

            <main className={"w-screen flex flex-col gap-2 h-full my-2"}>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
