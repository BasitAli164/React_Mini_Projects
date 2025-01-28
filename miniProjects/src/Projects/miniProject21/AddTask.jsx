import React, { useState } from "react";
import { useDispatchContext } from "./TaskContext";
let nextId=2;
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatchContext();
  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-[2px] border-solid border-b-violet-700 focus:outline-none"
      />
      <button
        className="px-8 py-2 mx-2 rounded-full bg-cyan-500"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
