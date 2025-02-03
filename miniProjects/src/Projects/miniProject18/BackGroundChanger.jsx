import React from "react";
import { useTheme } from "./ThemeContext";

const BackGroundChanger = () => {
  const { theme, check, setCheck ,setTheme} = useTheme();
  return (
    <>
      {check ? (
        <>
          <section
            className={`h-screen w-sc bg-[${theme}] flex justify-center items-centers`}
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
        <></>
      )}
    </>
  );
};

export default BackGroundChanger;
