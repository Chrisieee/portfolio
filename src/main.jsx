import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {LanguageProvider} from "./context/Language.jsx";
import {HashRouter} from "react-router";
import {AnimateProvider} from "./context/AnimationContext.jsx";

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <LanguageProvider>
            <AnimateProvider>
                <StrictMode>
                    <App/>
                </StrictMode>
            </AnimateProvider>
        </LanguageProvider>
    </HashRouter>
)
