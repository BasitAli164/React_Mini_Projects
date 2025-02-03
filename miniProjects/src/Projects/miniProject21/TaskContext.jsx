import { createContext,useContext,useReducer } from "react";

const TasksContext=createContext(null);
const TasksDispatchContext=createContext(null);

export const TasksProvider=({children})=>{
    const [tasks,dispatch]=useReducer(taskReducer,tasksInitialState);

    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export const useTasksContext=()=>{
    return useContext(TasksContext)
}
export const useDispatchContext=()=>{
    return useContext(TasksDispatchContext)
}