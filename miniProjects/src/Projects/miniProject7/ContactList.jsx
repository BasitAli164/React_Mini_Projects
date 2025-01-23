import React, { useState } from 'react';
const initailContact=[
    {id:1,name:"Basit Ali",email:"Abdupa911@gmail.com"},
    {id:2,name:"Muhammad Ali",email:"mali@gmail.com"},
    {id:3,name:"Sakina Batool",email:"sakina@gmail.com"},
    {id:4,name:"Khatija Ali",email:"khatija@gmail.com"},
    {id:5,name:"Kubra Batool",email:"kubra@gmail.com"},

]

const ContactList = () => {
    const [contact,setContact]=useState(initailContact);
    const [selectedId,setSelectedId]=useState(1)
  return (
    <>
      
    </>
  )
}

export default ContactList
