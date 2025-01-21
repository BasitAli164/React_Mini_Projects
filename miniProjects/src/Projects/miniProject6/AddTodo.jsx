import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
    const [title,setTitle]=useState('')
  return (
    <div className='flex  mb-10'>
    <input className='border-[2px] border-solid border-cyan-50 focus:outline-none focus:border-none' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
    <button className='mx-10 py-2 px-10 bg-cyan-200 rounded-full' onClick={()=>{
        onAddTodo(title)
        setTitle('')
    }}>Add</button>
      
    </div>
  )
}

export default AddTodo
