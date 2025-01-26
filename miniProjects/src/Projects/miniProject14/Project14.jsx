import React, { useReducer } from 'react';
const createInitialState=(userName)=>{
    const initialTodos=[];
    for(let i=0;i<=50;i++){
        initialTodos.push({
            id:i,
            text:userName+"s task #"+(i+1)
        })
    }
    return {
        draft:'',
        todos:initialTodos
    }
}


const reducer=(state,action)=>{
    switch(action.type){
        case 'changeDraft':{
            
        }
        case 'addTodo':{
            
        }
        default:{
            throw Error(`Unknown action: ${action.type}`)
        }
    }
}
const Project14 = () => {
    const [state,dispatch]=useReducer(reducer,userName,createInitialState);
  return (
    <>
      
    </>
  )
}

export default Project14
