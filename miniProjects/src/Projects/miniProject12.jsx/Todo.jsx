import React, { useState } from 'react';

let nextId=4;
const initialTodo=[
    {id:0,title:"Tution",done:true},
    {id:1,title:"Charging",done:false},
    {id:2,title:"Practice",done:false},
]

const Todo = () => {
  const [todo,setTodo]=useState(initialTodo);
  const [todoTitle,setTodoTittle]=useState("");
  const [isEditing,setIsEditing]=useState(false);
  console.log(todo)

  const handleAddTodo=(title)=>{
    console.log(title)
    const newArray=[
      ...todo,
      {
        id:nextId++,
        title:title,
        done:false
      }
    ]
    setTodo(newArray)
    setTodoTittle('')
  }
  const handleChangeTodo=(updateData)=>{
    console.log("The updata data is:",updateData)
    const newArray=todo.map((item)=>{
      if(item.id===updateData.id) return updateData
      else return  item
    })
    setTodo(newArray)
  }
  const handleDeleteTodo=(delId)=>{
    console.log("the id:",delId)
    const deletedArray=todo.filter((item)=>item.id!=delId)
    setTodo(deletedArray)
  }
  return (
    <>
    <section>
    <div>
      <input
       type="text"
       value={todoTitle}
       onChange={(e)=>setTodoTittle(e.target.value)}
       className='border-[2px] border-solid border-black focus:border-[1px] focus:outline-none'
       />
       <button 
        className='px-8 py-1 mx-2 bg-orange-300 rounded-full '
        onClick={()=>handleAddTodo(todoTitle)}
        >Add</button>
    </div>
     <div className='flex'>
     <div>
        {
          todo.map((item)=>(
            <ul key={item.id}>
               <input type="checkbox" checked={item.done} onChange={(e)=>{
                handleChangeTodo(
                  {
                    id:item.id,
                    title:item.title,
                    done:e.target.checked
                  }
                )

               }}/>
           
            </ul>
          ))
        }
             
      </div>
      <div>
        {
          todo.map((item)=>(
            <ul key={item.id}>
              <span>{item.title}</span>
              <button className='px-8 py-1 bg-cyan-300 rounded-full mx-2' onClick={(e)=>handleChangeTodo([
                ...item,
                {
                  id:item.id,
                  title:e.target.value,
                  done:item.done
                }
              ])}>{isEditing?'Save':'Edit'}</button>
              <button className='px-8 py-1 mx-3 rounded-full bg-cyan-300 ' onClick={()=>handleDeleteTodo(item.id)}>Delete</button>

            </ul>
          ))
        }
      </div>
     </div>
    </section>
    </>
  )
}

export default Todo
