import './index.css'
import {Route, Routes} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/Aboutme.jsx";
import Advocaderaser from "./pages/detailpages/Advocaderaser.jsx";
import Signatuur from "./pages/detailpages/Signatuur.jsx";
import Gamereviews from "./pages/detailpages/Gamereviews.jsx";
import Audio from "./pages/detailpages/Audio.jsx";
import Discordbot from "./pages/detailpages/Discordbot.jsx";
import Error from "./pages/Error.jsx";
import Stagelink from "./pages/detailpages/Stagelink.jsx";
import Trippie from "./pages/detailpages/Trippie.jsx";
import AdvoGodot from "./pages/detailpages/AdvoGodot.jsx";
import Signatuur2 from "./pages/detailpages/Signatuur2.jsx";
import Boardit from "./pages/detailpages/Boardit.jsx";

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
                    <Route path="/projects/4" element={<Audio/>}/>
                    <Route path="/projects/5" element={<Discordbot/>}/>
                    <Route path="/projects/6" element={<Trippie/>}/>
                    <Route path="/projects/7" element={<Stagelink/>}/>
                    <Route path="/projects/8" element={<AdvoGodot/>}/>
                    <Route path="/projects/9" element={<Signatuur2/>}/>
                    <Route path="/projects/10" element={<Boardit/>}/>
                    <Route path="/about-me" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </>
    )

}

export default App
