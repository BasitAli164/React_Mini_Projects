import React, { useState } from 'react';
let nextId=4;
const initialState=[
    {id:1,title:'Reading Book',done:true},
    {id:2,title:'Writing Stories',done:false},
    {id:3,title:'Running 5 runing',done:false}
]

const Todo2 = () => {
    const [todo,setTodo]=useState(initialState)

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
    }
  return (
    <>
    <section>
        <div>
            
        </div>
    </section>
      
    </>
  )
}

export default Todo2
