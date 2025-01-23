import React, { useState } from 'react';
import EditContact from './EditContact';
import ContactList from './ContactList';
const initailContact=[
    {id:1,name:"Basit Ali",email:"Abdupa911@gmail.com"},
    {id:2,name:"Muhammad Ali",email:"mali@gmail.com"},
    {id:3,name:"Sakina Batool",email:"sakina@gmail.com"},
    {id:4,name:"Khatija Ali",email:"khatija@gmail.com"},
    {id:5,name:"Kubra Batool",email:"kubra@gmail.com"},

]

const Contact = () => {
    const [contact,setContact]=useState(initailContact);
    const [selectedId,setSelectedId]=useState(1)

    const selectedContact=contact.find((contactId)=>contactId.id===selectedId)

    function  handleSave(updateData){
      const nextContact=contact.map((item)=>{
        if(item.id===updateData.id){
          return updateData
        }else{
          return item
        }
        setContact(nextContact)
      })

    }
   
  return (
    <>
    <div>
        <ContactList
          contacts={contact}
          selectedId={selectedId}
          onSelect={(id)=>setSelectedId(id)}
        
        />
        <hr />
        <EditContact 
        initialData={selectedContact}
        onSave={handleSave}
        />
    </div>
      
    </>
  )
}

export default Contact
