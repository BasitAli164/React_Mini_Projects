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
        <button onClick={()=>{
            const updateData={
                id:initialData.id,
                name:name,
                email:email
            }
            onSave(updateData)
        }}>
            Save
        </button>
        <button onClick={()=>{
            setName(initialData.name)
            setEmail(initialData.email)
        }}>Reset</button>
    </section>
      
    </>
  )
}

export default EditContact
