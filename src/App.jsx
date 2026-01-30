import './index.css'
import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/Aboutme.jsx";
import Advocaderaser from "./pages/detailpages/Advocaderaser.jsx";
import Signatuur from "./pages/detailpages/Signatuur.jsx";
import Gamereviews from "./pages/detailpages/Gamereviews.jsx";

function App() {
    const router = createBrowserRouter([
        {
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/projects",
                    element: <Projects/>
                },
                {
                    path: "/projects/1",
                    element: <Advocaderaser/>
                },
                {
                    path: "/projects/2",
                    element: <Signatuur/>
                },
                {
                    path: "/projects/3",
                    element: <Gamereviews/>
                },
                {
                    path: "/about-me",
                    element: <About/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )

}

export default App
