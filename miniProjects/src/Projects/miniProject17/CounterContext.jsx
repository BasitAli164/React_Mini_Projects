import { createContext, useState } from "react";

const counterContext=createContext();

const CounterContext=({children})=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const
}