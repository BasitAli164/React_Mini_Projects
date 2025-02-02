import { createContext, useState } from "react";

const counterContext=createContext();

export const CounterProvider=({children})=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <counterContext.Provider>
            {children}
        </counterContext.Provider>
    )
}