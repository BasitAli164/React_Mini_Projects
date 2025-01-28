import React, { useState } from 'react'
import { useDispatchContext, useTasksContext } from './Projects/miniProject21/TaskContext'

const TaskList = () => {
    const tasks=useTasksContext()
  return (
    <>
    <ul>
        {
            tasks.map((item)=>(
                <li key={item.id}>
                    <Tasks task={item}/>

                </li>
            ))
        }
    </ul>
      
    </>
  )
}

export default TaskList

function Tasks({task}){
    const [isEditing,setIsEditing]=useState(false);
    const dispatch=useDispatchContext();
    let taskContent;
    if(isEditing){
        
    }

}
