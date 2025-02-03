import { createContext, useContext, useState } from "react";
const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("#fffddcc");
  const [check,setCheck]=useState(false)
  if(check){
    setTheme('#fff')
  }else{
    setTheme('#000')
  }
  const handleCheck=()=>{
    setCheck(!check)
  }
  return (
    <themeContext.Provider value={{ theme, setTheme,check,handleCheck }}>
      {children}
    </themeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(themeContext);
};
