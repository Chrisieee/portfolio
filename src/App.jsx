import './index.css'
import {HashRouter, Link, Outlet, Route, RouterProvider, Routes} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/Aboutme.jsx";
import Advocaderaser from "./pages/detailpages/Advocaderaser.jsx";
import Signatuur from "./pages/detailpages/Signatuur.jsx";
import Gamereviews from "./pages/detailpages/Gamereviews.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/1" element={<Advocaderaser/>}/>
                    <Route path="/projects/2" element={<Signatuur/>}/>
                    <Route path="/projects/3" element={<Gamereviews/>}/>
                    <Route path="/about-me" element={<About/>}/>
                </Route>
            </Routes>
        </>
    )

}

export default App
