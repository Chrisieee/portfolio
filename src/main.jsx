import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {LanguageProvider} from "./context/Language.jsx";
import {HashRouter} from "react-router";

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <LanguageProvider>
            <StrictMode>
                <App/>
            </StrictMode>
        </LanguageProvider>
    </HashRouter>
)
