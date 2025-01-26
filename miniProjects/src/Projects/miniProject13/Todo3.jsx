import React, { useReducer } from 'react';
let nextId=3;
initialState=[
    {id:1,title:"Reading a book",done:true},
    {id:3,title:"Writing a paragraph",done:false}
]

const Todo3 = () => {
    const [todo,dispatch]=useReducer(reducer,initialState)
    console.log("the initail state is:",todo)
  return (
    <div>
      
    </div>
  )
}

export default Todo3
