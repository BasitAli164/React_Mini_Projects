import React from "react";
import { TasksProvider } from "./TaskContext";
import AddTask from "./AddTask";
import TaskList from "../../TaskList";

const Task = () => {
  return (
    <TasksProvider>
      <h1 className="text-3xl font-bold ">Day of in Skardu</h1>
      <AddTask />
      <TaskList/>
    </TasksProvider>
  );
};

export default Task;
