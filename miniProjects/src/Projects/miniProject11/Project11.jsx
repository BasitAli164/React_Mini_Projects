import React, { act, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment": {
      return state + 1;
    }
    case "decrement": {
      return state - 1;
    }
    default:
      throw Error("Invalid State");
  }
};

let initialState = 0;
const Project11 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
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
    </>
  );
};

export default Project11;
