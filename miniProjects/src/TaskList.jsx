import React, { useState } from "react";
import {
  useDispatchContext,
  useTasksContext,
} from "./Projects/miniProject21/TaskContext";

const TaskList = () => {
  const tasks = useTasksContext();
  return (
    <>
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <Tasks task={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;

function Tasks({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatchContext();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
          className="bordre-[3px] border-solid border-black "
        />
        <button
          onClick={() => setIsEditing(false)}
          className="mx-2 px-8 py-2 rounded-full bg-yellow-300"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => setIsEditing(true)}
          className="px-8 py-2 mx-2 rounded-full bg-cyan-300"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
          className="border-[3px] border-black border-solid"
        />
        {taskContent}
        <button
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}
          className="px-8 py-2 mx-2 rounded-full bg-red-500"
        >
          Delete
        </button>
      </label>
    </>
  );
}
