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
        taskContent=(
            <>
            <input
             type="text"
             value={task.text}
             onChange={e=>{
                dispatch({
                    type:'changed',
                    task:{
                        ...task,
                        text:e.target.value
                    }
                })
             }}
             className='bordre-[3px] border-solid border-black '
             />
             <button onClick={()=>setIsEditing(false)}>Save</button>
            
            </>
        )

    }

}
