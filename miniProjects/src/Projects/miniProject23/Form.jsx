import React, { useState } from 'react'

const Form = () => {
    const [toggle,setToggle]=useState(false);
    const [data,setData]=useState({
        userName:'',
        email:'',
        password:''
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]:[e.target.value]
        })
      
            setData({
                userName:'',
                email:'',
                password:''
                
            })
            
        
        

    }
    const handleToggle=()=>{
        setToggle(!toggle)
        
    }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
    <h1 className='text-3xl font-bold '>{toggle?'Sing up':'Login'} Form</h1>
    <hr className='bg-white w-32' />
    <form onSubmit={handleSubmit} className='flex flex-col'>
       <div className='flex gap-4'>
       <div className='flex flex-col gap-y-4'>
        {
            toggle &&(
                <label>username:</label>

            )
        }
            <label>email:</label>
            <label>password:</label>
        </div>
        <div className='flex flex-col gap-y-4'>
            {
                toggle &&(
                    <input type="text" value={data.userName} onChange={(e)=>setData(e.target.value)}/>

                )
            }
            <input type="email" value={data.email} onChange={(e)=>setData(e.target.value)} />
            <input type="password" value={data.userName} onChange={e=>setData(e.target.value)} />
        </div>
       </div>
        <div className='flex justify-center items-center gap-4'>
            <button  className='px-7 py-2 rounded-full bg-cyan-500 font-bold my-5'>Submit</button>
            
        </div>

    </form>
      <p>{toggle?"You don't have account":"You have account already"}
        <span className='text-cyan-500 cursor-pointer mx-3' onClick={handleToggle}>{toggle?"Login":" Register"}</span>
      </p>
    </div>
  )
}

export default Form
