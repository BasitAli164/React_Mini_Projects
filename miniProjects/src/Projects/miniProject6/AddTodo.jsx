import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
    const [title,setTitle]=useState('')
  return (
    <>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
    <button onClick={()=>{
        onAddTodo(title)
        setTitle('')
    }}>Add</button>
      
    </>
  )
}

export default AddTodo
