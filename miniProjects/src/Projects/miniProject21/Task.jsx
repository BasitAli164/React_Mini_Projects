import React from 'react'
import { TasksProvider } from './TaskContext'

const Task = () => {
  return (
    <TasksProvider>
        <h1 className='text-3xl font-bold '>Day of in Skardu</h1>

    </TasksProvider>
  )
}

export default Task
