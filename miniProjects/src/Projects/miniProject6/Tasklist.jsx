import React, { useState } from 'react'

const Tasklist = ({todos,onChangeTodo, onDeleteTodo}) => {
  return (
    <>
      <ul>
        {
            todos.map((todo,index)=>(
                <li key={index}>
                    <Task
                    todo={todo}
                    onChange={onChangeTodo}
                    onDelete={onDeleteTodo}
                    />
                </li>
            ))
        }
      </ul>
    </>
  )
}

export default Tasklist

const Task=({todo,onChange,onDelete})=>{
    const [isEditing,setIsEditing]=useState(false)
    let todoContent;
    if(isEditing){
        todoContent=(
            <>
            <input type="text" value={todo.title} onChange={(e)=>onChange({
                ...todo,
                title:e.target.value

                
            })} />
            <button className='bg-red-400 px-10 py-2' onClick={()=>setIsEditing(false)}>
                Save
            </button>
            </>
        );
    
    }else{
        todoContent=(
            <>
            {todo.title}
            <button onClick={()=>setIsEditing(true)}>Edit</button>
            </>
        )
    }
    return(
        <>
        <label >
            <input type="checkbox"  checked={todo.done} onChange={(e)=>{
                onChange({
                    ...todo,
                    done:e.target.value
                })
            }} />
            {todoContent}
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </label>
        </>
    )
}
