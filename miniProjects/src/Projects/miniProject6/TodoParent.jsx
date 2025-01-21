import React, { useState } from 'react'
import AddTodo from './AddTodo';
import Tasklist from './Tasklist';

const initailTodos=[
    {id:0,title:'Wake Early Morning',done:true},
    {id:1,title:'Give Tution for Sister',done:true},
    {id:3,title:"Go for Charging ",done:true},
]

const TodoParent = () => {
    const [todos,setTodos]=useState(initailTodos);
    const handleAddTodo=(title)=>{
        setTodos([
            ...todos,
            {...todos,title:title}
        ])
    }
    const handleChangeTodo=(nextTodo)=>{
        const todo=todos.find((item)=>item.id===nextTodo.id)
        todo.title=nextTodo.title
        todo.done=nextTodo.done

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
