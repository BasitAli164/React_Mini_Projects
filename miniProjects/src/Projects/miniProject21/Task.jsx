import React from "react";
import { TasksProvider } from "./TaskContext";
import AddTask from "./AddTask";
import TaskList from "../../TaskList";

const Task = () => {
  return (
  <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
      <TasksProvider >
      <h1 className="text-3xl font-bold ">Day of in Skardu</h1>
      <AddTask />
      <TaskList/>
    </TasksProvider>
  </div>
  );
};

export default Task;
