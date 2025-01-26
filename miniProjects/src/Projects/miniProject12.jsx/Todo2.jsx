import React, { useState } from 'react';
let nextId=4;
const initialState=[
    {id:1,title:'Reading Book',done:true},
    {id:2,title:'Writing Stories',done:false},
    {id:3,title:'Running 5 runing',done:false}
]

const Todo2 = () => {
    const [todo,setTodo]=useState(initialState);
    const [todoTitle,setTodoTitle]=useState('');
    console.log(todo)

    const handleAddTodo=(title)=>{
        const newArray=[
            ...todo,
            {
                id:nextId++,
                title:title,
                done:false
            }
        ]
        setTodo(newArray)
        setTodoTitle("")
    }
    const handleToggleDone=(id,value)=>{
        const newArray=todo.map((item)=>{
            item.id===id?value:item
        })
        setTodo(newArray)
    }
  return (
    <>
    <section>
        <div>
            <input className='border-[2px] border-solid border-black' type="text" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} />
            <button className='px-6 py-1 mx-1 rounded-full bg-cyan-400' onClick={()=>handleAddTodo(todoTitle)}>Add</button>

        </div>
        <div>
            {
                todo.map((item)=>(
                    <>
                    <div key={item.id}>
                        <div>
                            <input type="checkbox" checked={item.done} onChange={(e)=>{
                                setTodo(todo.map((item)=>item.id))
                            }}  />
                            <span className={`${item.done?'line-through':''}`}>{item.title}</span>
                        </div>
                        <div></div>



                    </div>
                    
                    
                    </>
                ))
            }
        </div>
    </section>
      
    </>
  )
}

export default Todo2
