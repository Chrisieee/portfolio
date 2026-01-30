import './index.css'
import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/Aboutme.jsx";
import Advocaderaser from "./pages/Advocaderaser.jsx";

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
