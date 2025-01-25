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
      else item
    })
    setTodo(newArray)
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
      <div>
        {
          todo.map((item)=>(
            <ul key={item.id}>
               <input type="checkbox" value={item.done} onChange={(e)=>{
                // console.log("item done is:",item.done)
                handleChangeTodo([
                  ...todo,
                  {
                    id:item.id,
                    title:item.title,
                    done:e.target.checked
                  }
                ])

               }}/>
          <span>{item.title}</span>
            </ul>
          ))
        }
             
      </div>
    </section>
    </>
  )
}

export default Todo
