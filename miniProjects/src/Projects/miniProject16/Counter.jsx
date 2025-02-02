import React, { useContext } from "react";
import { counterContext } from "./counterContext";

const CounterExample = () => {
  const { count, increment, decrement } = useContext(counterContext);
  console.log(count);
  return (
    <div>
      <button
        onClick={increment}
        className="mx-3 py-1 px-8 bg-cyan-600 rounded-full"
      >
        +
      </button>
      <span className="text-white">{count}</span>
      <button
        onClick={decrement}
        className="mx-3 py-1 px-8 bg-cyan-600 rounded-full"
      >
        -
      </button>
    </div>
  );
};

export default CounterExample;
