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
  console.log(todos)
  return (
    <>
    <AddTodo onAddTodo={handleAddTodo}/>
    <TaskList onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo}/>
      
    </>
  )
}

export default Todo
