import {createContext, useContext} from "react";

const StyleContext = createContext()

export function StyleProvider({children}) {

    const button = "p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 hover:scale-105";
    const button2 = "p-2 rounded-2xl border-2 bg-blue-400 border-blue-500 hover:bg-blue-500 hover:border-blue-300 hover:scale-105 flex-1";
    const cvButton = "p-2 rounded-xl bg-blue-300 text-center border-2 border-blue-400 hover:bg-blue-400 hover:border-blue-300 hover:scale-105"

    return (
        <StyleContext.Provider value={{
            button, button2, cvButton
        }}>
            {children}
        </StyleContext.Provider>
    )
}

export function useStyle() {
    return useContext(StyleContext)
}