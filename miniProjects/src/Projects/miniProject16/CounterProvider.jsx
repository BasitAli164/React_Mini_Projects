import React, { Children, useState } from "react";
import { counterContext } from "./counterContext";

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <counterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </counterContext.Provider>
  );
};

export default CounterProvider;
