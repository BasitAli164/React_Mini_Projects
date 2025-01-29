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
        

    }
    const handleToggle=()=>{
        setToggle(!toggle)
        setData({
            userName:'',
            email:'',
            password:''
            
        })
    }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
    <h1 className='text-3xl font-bold '>{toggle?'Sign Up':'Login'} Form</h1>
    <hr className='bg-white w-32' />
    <form onSubmit={handleSubmit} className='flex flex-col'>
       <div className='flex gap-4'>
       <div className='flex flex-col gap-y-4'>
            <label>username:</label>
            <label>email:</label>
            <label>password:</label>
        </div>
        <div className='flex flex-col gap-y-4'>
            <input type="text" value={data.userName} onChange={(e)=>setData(e.target.value)}/>
            <input type="email" value={data.email} onChange={(e)=>setData(e.target.value)} />
            <input type="password" value={data.userName} onChange={e=>setData(e.target.value)} />
        </div>
       </div>
        <div className='flex justify-center items-center gap-4'>
            <button onClick={handleToggle} className='px-7 py-2 rounded-full bg-cyan-500 font-bold my-5'>Login</button>
            <button onClick={handleToggle} className='px-7 py-2 rounded-full bg-cyan-500 font-bold my-5'>Sign Up</button>
        </div>

    </form>
      
    </div>
  )
}

export default Form
