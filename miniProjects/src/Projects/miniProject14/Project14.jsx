import React, { act, useReducer } from 'react';
const createInitialState=(userName)=>{
    const initialTodos=[];
    for(let i=0;i<=20;i++){
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
           return {
            ...state,
            draft:action.nextDraft,
           }
            
        }
        case 'addTodo':{
            return {
                draft: '',
                todos: [{
                  id: state.todos.length,
                  text: state.draft
                }, ...state.todos]
              }
            
        }
        default:{
            throw Error(`Unknown action: ${action.type}`)
        }
    }
}
const Project14 = ({userName}) => {
    const [state,dispatch]=useReducer(reducer,userName,createInitialState);
    console.log(state.todos)
  return (
    <>
      <input type="text" value={state.draft} onChange={(e)=>dispatch({type:'changeDraft',nextDraft:e.target.value})} className='border-[2px] border-solid border-gray-500' />
      <button className='px-8 py-1 mx--2 rounded-full bg-cyan-400' onClick={()=>{
        dispatch({type:'addTodo'})
      }}>Add</button>
      <ul>
        {
            state.todos.map((item)=>(
                <li key={item.id}>{item.text}</li>
            ))
        }
      </ul>
    </>
  )
}

export default Project14
