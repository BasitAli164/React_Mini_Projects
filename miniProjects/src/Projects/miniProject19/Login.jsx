import React, { useState } from 'react'

const Login = () => {
  const [userName,setUserName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUserName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='text-2xl font-bold'>userName:</label>
        <input className='focus:outline-none border-[2px] border-solid border-black '  type="text" value={userName} onChange={e=>setUserName(e.target.value)} placeholder='username' />
        <br /><br />
        <label className='text-2xl font-bold'>Password:</label>
        <input className='focus:outline-none border-[2px] border-solid border-black '  type="text" value={password} onChange={e=>setPassword(e.target.value)} placeholder='password'  />
        <br /><br />
        <label className='text-2xl font-bold'>Email:</label>
        <input className='focus:outline-none border-[2px] border-solid border-black '  type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder='email'  />
        <br /><br />
        <input className='px-8 py-2 font-bold rounded-md' type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default Login
