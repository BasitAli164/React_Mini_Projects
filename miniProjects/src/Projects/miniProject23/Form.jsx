import React, { useState } from 'react'

const Form = () => {
    const [toggle,setToggle]=useState(false);
    const handleSubmit=()=>{

    }
  return (
    <div>
    <h1>{toggle?'Sign Up':'Login'} Form</h1>
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
