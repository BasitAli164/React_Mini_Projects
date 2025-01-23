import React, { useState } from 'react'

const EditContact = ({initialData,onSave}) => {
    const [name,setName]=useState(initialData.name);
    const [email,setEmail]=useState(initialData.email)
  return (
    <>
    <section className='flex gap-10 flex-col'>
       <div className='flex gap-10'>
       <label >
            Name: {" "}
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
        <label> 
            Email: {" "}
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
       </div>
       <div >
       <button className='mx-7 rounded-full px-10 py-2 bg-gray-400' onClick={()=>{

            const updateData={
                id:initialData.id,
                name:name,
                email:email
            }
            console.log("the update data is: in editContact",updateData)
            onSave(updateData)
        }}>
            Save
        </button>
        <button className='mx-7 rounded-full px-10 py-2 bg-gray-400' onClick={()=>{
            console.log("the initila data")
            setName(initialData.name)
            setEmail(initialData.email)
        }}>Reset</button>
       </div>
    </section>
      
    </>
  )
}

export default EditContact
