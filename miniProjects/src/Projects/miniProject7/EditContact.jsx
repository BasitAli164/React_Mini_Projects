import React, { useState } from 'react'

const EditContact = ({initialData,onSave}) => {
    const [name,setName]=useState(initialData.name);
    const [email,setEmail]=useState(initialData.email)
  return (
    <>
    <section>
        <label >
            Name: {" "}
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
        <label> 
            Email: {" "}
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <button onClick={}>
            Save
        </button>
    </section>
      
    </>
  )
}

export default EditContact
