import React, {  useReducer } from "react";

const reducer = (state, action) => {
    console.log(action,state)
  switch (action.type) {
    case "Increment": {
        console.log(typeof state)
        if(typeof(state)==='number')return state + 1;
      
    }
    case "decrement": {
        if(typeof(state)==='number')return state - 1;
    }
    default:{
        return "Some thing we Wrong"

    }
      
  }
};

let initialState = 0;
const Project11 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <h1 className="text-3xl mx-10 font-bold">Counter with Reducer</h1>
      <button
        className="text-3xl font-bold mx-3 py-2
     px-10 rounded-full bg-cyan-300"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <span className="mx-10 text-5xl font-bold">{state}</span>
      <button className="text-3xl font-bold mx-3 py-2 px-10 rounded-full bg-cyan-300" onClick={()=>dispatch({type:"Increment"})}>
        +
      </button>
      <button className="text-3xl font-bold mx-3 py-2 px-10 rounded-full bg-cyan-300" onClick={()=>dispatch({type:"Incremsent"})}>
        Click me
      </button>
    </>
  );
};

export default Project11;
