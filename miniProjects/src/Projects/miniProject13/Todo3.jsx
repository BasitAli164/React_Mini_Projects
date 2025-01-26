import React, { useReducer, useState } from 'react';
let nextId=3;
const initialState=[
    {id:1,title:"Reading a book",done:true},
    {id:3,title:"Writing a paragraph",done:false}
]
const reducer=(todo,action)=>{
  console.log(action)
  switch(action.type){
    case "addTodo":{
      return  [
        ...todo,
        {
          id:nextId++,
          title:action.payload,
          done:false,
        }
      ]
      
    }
    case "updateTodo":{

    }
    case 'deleteTodo':{

    }
    case 'toggle':{
      return (
        todo.map((item)=>{
          item.id==action.payload.id?{...item,done:action.payload.value}:item
        })
      )

    }
    default:{
      throw Error("Error")
    }
  }
}

const Todo3 = () => {
    const [todo,dispatch]=useReducer(reducer,initialState)
    const [title,setTitle]=useState('')
    console.log("the initail state is:",todo)
  return (
    <div>
      <div>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='border-[2px] border-solid border-black ' />
      <button className='px-8 py-1 mx-2 rounded-full bg-cyan-500' onClick={()=>dispatch({type:'addTodo',payload:title})}>Add</button>
      </div>
      <div>
        {
          todo.map((item)=>(
            <div key={item.id}>
              <div>
                <input type="checkbox" checked={item.done} onChange={(e)=>dispatch({type:'toggle',payload:{id:item.id,value:e.target.checked}})} />
                <span className={`${item.done?'line-through':''}`}>{item.title}</span>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Todo3
