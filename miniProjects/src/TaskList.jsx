import React from 'react'
import { useTasksContext } from './Projects/miniProject21/TaskContext'

const TaskList = () => {
    const tasks=useTasksContext()
  return (
    <>
    <ul>
        {
            tasks.map((item)=>(
                <li key={item.id}>

                </li>
            ))
        }
    </ul>
      
    </>
  )
}

export default TaskList
