import React, { useState } from 'react'

const Form = () => {
    const [toggle,setToggle]=useState(false);
    const handleSubmit=()=>{

    }
  return (
    <>
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

    </form>
      
    </>
  )
}

export default Form
