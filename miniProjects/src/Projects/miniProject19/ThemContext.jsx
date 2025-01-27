import { createContext,useContext } from "react";

const themeContext=createContext({});

export const ThemeProvider=({children})=>{
    return(
        <themeContext.Provider>
        {children}
        </themeContext.Provider>
    )
}
