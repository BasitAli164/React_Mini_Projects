import React, { useState } from 'react'
import AddTodo from './AddTodo';
import Tasklist from './Tasklist';
const nextId=14;
const initailTodos=[
    {id:0,title:'Wake Early Morning',done:true},
    {id:1,title:'Give Tution for Sister',done:true},
    {id:3,title:"Go for Charging ",done:true},
]

const TodoParent = () => {
    const [todos,setTodos]=useState(initailTodos);
    console.log("todos ",todos)
    const handleAddTodo=(title)=>{
        setTodos([
            ...todos,
            {id:nextId++,title:title,done:false}
        ])
    }
    const handleChangeTodo=(nextTodo)=>{
        const todo=todos.map((item)=>{
            if(item.id===nextTodo.id) return nextTodo
            else item
        })

    }
    const handleDelete=(todoId)=>{
        todos.filter((item)=>item.id!==todoId)
    }
  return (
    <div className='bg-cyan-500 w-full h-screen flex flex-col justify-center items-center'>
    <AddTodo onAddTodo={handleAddTodo}/>
    <Tasklist todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDelete}/>
      
    </div>
  )
}

export default TodoParent
