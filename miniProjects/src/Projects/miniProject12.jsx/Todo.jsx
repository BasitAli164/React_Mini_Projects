import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId=4;
const initailTodos=[
  {id:0,title:'Tution',done:true},
  {id:2,title:'Charging',done:true},
  {id:3,title:'Practice',done:false},
]

const Todo = () => {
  const [todos,setTodos]=useState(initailTodos)
  const [check,setCheck]=useState(false)
  console.log(todos)
  const handleAddTodo=(title)=>{
    const newArray=[
      ...todos,
      {
        id:nextId++,
        title:title,
        done:true,
      }
    ]
    setTodos(newArray)
  }
  const handleChangeTodo=(updateData)=>{
    const updateTodo=todos.map((item)=>{
      if(item.id===updateData.id) return updateData
      else item
    })
    setTodos(updateData)
  }
  const handleDeleteTodo=(deleteId)=>{
    const deleteItem=todos.filter((item)=>item.id!==deleteId)
    setTodos(deleteItem)
  }
  
  return (
    <div className='w-full h-screen flex justify-center flex-col items-center'>
    <AddTodo onAddTodo={handleAddTodo}/>
      <TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo}/>
    
      
    </div>
  )
}

export default Todo
