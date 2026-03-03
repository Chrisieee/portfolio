import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {LanguageProvider} from "./context/Language.jsx";
import {HashRouter} from "react-router";
import {AboutProvider} from "./context/AboutContext.jsx";
import {HomeProvider} from "./context/HomeContext.jsx";
import {ProjectsProvider} from "./context/ProjectsContext.jsx";
import {AnimateProvider} from "./context/AnimationContext.jsx";
import {StyleProvider} from "./context/StylingContext.jsx";

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <StyleProvider>
            <HomeProvider>
                <AboutProvider>
                    <ProjectsProvider>
                        <LanguageProvider>
                            <AnimateProvider>
                                <StrictMode>
                                    <App/>
                                </StrictMode>
                            </AnimateProvider>
                        </LanguageProvider>
                    </ProjectsProvider>
                </AboutProvider>
            </HomeProvider>
        </StyleProvider>
    </HashRouter>
)
