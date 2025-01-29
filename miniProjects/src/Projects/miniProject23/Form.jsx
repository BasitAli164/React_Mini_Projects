import React, { useState } from 'react'

const Form = () => {
    const [toggle,setToggle]=useState(false);
    const handleSubmit=()=>{

    }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
    <h1 className='text-3xl font-bold '>{toggle?'Sign Up':'Login'} Form</h1>
    <hr className='bg-white w-40' />
    <form onSubmit={handleSubmit}>
        <div>
            <label>userName:</label>
            <input type="text" />
        </div>
        <div>
            <label>email:</label>
            <input type="email" />
        </div>
        <div>
            <label>password:</label>
            <input type="password" />
        </div>
        <div>
            <button>Login</button>
            <button>Sign Up</button>
        </div>

    </form>
      
    </div>
  )
}

export default Form
