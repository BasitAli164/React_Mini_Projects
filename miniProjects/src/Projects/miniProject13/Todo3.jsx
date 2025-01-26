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
      return todo.map((item)=>{
        item.id==action.payload.id
        ?
        {
          ...item,
          title:action.payload.title
        }:item
      })

    }
    case 'deleteTodo':{
      return todo.filter((item)=>item.id!==action.payload)

      

    }
    case 'toggle':{
      return (
        todo.map((item)=>{
          return item.id==action.payload.id
          ?
          {...item,done:action.payload.value}
          :item
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
    const [title,setTitle]=useState('');
    const [isEditing,setIsEditing]=useState(false);
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
            <div className='flex justify-between gap-y-2' key={item.id}>
              <div>
                <input type="checkbox" checked={item.done} onChange={(e)=>dispatch({type:'toggle',payload:{id:item.id,value:e.target.checked}})} />
                <span className={`${item.done?'line-through':''}`}>{item.title}</span>
              </div>
              <div>
               {
                isEditing?(
                  <>
                  <button className='mx-2 px-6 py-1 rounded-full bg-yellow-400'onClick={()=>{
                    setIsEditing(false)
                  }} >Save</button>
                  </>
                ):(
                  <>
                  <button className='mx-2 px-6 py-1 rounded-full bg-yellow-400' onClick={()=>{
                    // dispatch({type:'updateTodo',payload:{id:item.id,title:title}})
                    setIsEditing(true)
                  }}>Edit</button>
                  </>
                )
               }
                <button className='mx-2 px-6 py-1 rounded-full bg-red-400' onClick={()=>dispatch({type:'deleteTodo',payload:item.id})}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Todo3
