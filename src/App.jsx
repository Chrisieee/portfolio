import './index.css'
import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/Aboutme.jsx";

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
                    path: "/projecten",
                    element: <Projects/>
                },
                {
                    path: "/over-mij",
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
