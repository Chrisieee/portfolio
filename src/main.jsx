import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {LanguageProvider} from "./context/Language.jsx";
import {HashRouter} from "react-router";
import {AboutProvider} from "./context/AboutContext.jsx";
import {HomeProvider} from "./context/HomeContext.jsx";
import {ProjectsProvider} from "./context/ProjectsContext.jsx";

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <HomeProvider>
            <AboutProvider>
                <ProjectsProvider>
                    <LanguageProvider>
                        <StrictMode>
                            <App/>
                        </StrictMode>
                    </LanguageProvider>
                </ProjectsProvider>
            </AboutProvider>
        </HomeProvider>
    </HashRouter>
)
