import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
    const [text,setText]=useState('')
  return (
    <>
    <label>
        <input className='border-[2px] border-solid border-black focus:border-[1px] mx-5 w-[300px] h-10 focus:outline-none' type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className='px-10 py-2 mx-4 rounded-full bg-orange-400' onClick={()=>onAddTodo(text)}>Add</button>
    </label>
      
    </>
  )
}

export default AddTodo
