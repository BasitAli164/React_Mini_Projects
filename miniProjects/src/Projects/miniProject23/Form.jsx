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
            <label>userName</label>
            <input type="text" />
        </div>

    </form>
      
    </>
  )
}

export default Form
