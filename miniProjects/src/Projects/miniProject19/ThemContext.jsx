import { createContext,useContext, useState } from "react";

const themeContext=createContext({});

export const ThemeProviders=({children})=>{
    const [theme,setTheme]=useState('light')
    return(
        <themeContext.Provider value={{theme,setTheme}}>
        {children}
        </themeContext.Provider>
          )
}

export const useTheme=()=>{
    return useContext(themeContext)
}