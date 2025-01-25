import React, { useState } from 'react'

const TaskList = ({todos,onChangeTodo,onDeleteTodo}) => {

  return (
    <>
    <Task todos={todos} onChangeTodo={onChangeTodo} onDeleteTodo={onDeleteTodo}/>
      
    </>
  )
}

export default TaskList

const Task=({todos,onChangeTodo,onDeleteTodo})=>{
    console.log("object",todos)
    const [isEditing,setIsEditing]=useState(false);
    let todoContent;
    if(isEditing){
        todoContent=(
            <>
           <input
           type="text"
           value={todos.title}
           onChange={(e)=>
            onChangeTodo({...todos,title:e.target.value})
           }
           className='border-[2px ] border-solid border-black focus:outline-none focus:border-[1px]'
            />
            <button className='px-10 py-2 mx-4 rounded-full bg-orange-400' onClick={()=>setIsEditing(false)}>Save</button>
            
            </>
        )
    
    }
    else{
        todoContent=(
            <>
            {todos.title}
            <button className='px-10 py-2 mx-4 rounded-full bg-orange-400' onClick={()=>setIsEditing(true)}>Edit</button>

            </>
        )
    }


    return(
        <>
        <label>
            {/* <input
             type="checkbox"
             checked={todos.done}
             onChange={(e)=>
                onChangeTodo({
                    ...todos,
                    done:e.target.checked
                })
             }
             className='border-[2px] border-solid border-black focus:outline-none focus:border-[1px]'
             /> */}
             {
                todos.map((item)=>(
                    <li key={item.id}>
                         <input
             type="checkbox"
             checked={todos.done}
             onChange={(e)=>
                onChangeTodo({
                    ...todos,
                    done:e.target.checked
                })
             }
             className='border-[2px] border-solid border-black focus:outline-none focus:border-[1px]'
             />
                        <span>{item.title}</span>
                        {todoContent}
                        <button className='px-10 py-2 mx-4 rounded-full bg-orange-400' onClick={()=>onDeleteTodo(todos.id)}>Delete</button>
                    </li>
                ))
             }
            
        </label>
        
        </>
    )
}
