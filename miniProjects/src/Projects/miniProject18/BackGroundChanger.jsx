import React from "react";
import { useTheme } from "./ThemeContext";

const BackGroundChanger = () => {
  const { theme, setTheme } = useTheme();
  console.log("theme is:",theme)
  return (
    <section
      className={`h-screen w-screen bg-[#000] flex justify-center items-center`}
    >
      <button
        className="px-10 py-2 rounded-full bg-red-600"
        onClick={() => {
            console.log("object")
            setTheme('#000')
        }}
      >
        Click
      </button>
    </section>
  );
};

export default BackGroundChanger;
