import { createContext, useContext, useState } from "react";
const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("#000");
  const [check,setCheck]=useState(false)
 
  return (
    <themeContext.Provider value={{ theme, setTheme,check,setCheck }}>
      {children}
    </themeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(themeContext);
};
