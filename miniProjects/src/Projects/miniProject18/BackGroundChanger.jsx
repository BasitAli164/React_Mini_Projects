import React from "react";
import { useTheme } from "./ThemeContext";

const BackGroundChanger = () => {
  const { theme, check, setCheck ,setTheme} = useTheme();
  return (
    <>
      {check ? (
        <>
        {
            ()=>{setTheme('#000')}
        }
          <section
            className={`h-screen w-screen bg-[${theme}] flex justify-center items-centers`}
            >
            <button
              className="px-10 py-2 rounded-full bg-red-600"
              onClick={()=>{
                setCheck(!check)

              }}
            >
              Click
            </button>
          </section>
        </>
      ) : (
        <>
            {
                              ()=>{setTheme('#ffddcc')}

            }        
            
        
        </>
      )}
    </>
  );
};

export default BackGroundChanger;
