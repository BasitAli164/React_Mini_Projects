import React, { useReducer } from 'react'
import { initialState, messangerReducer } from './messengerReducer'
import ContactList from './ContactList';
import Chat from './Chat';

const contacts=[
    {id:0,name:"Basit Ali",email:"Apoali911@gmail.com"},
    {id:1,name:"Sakina Ali",email:"sakina@gmail.com"}
]

const Project15 = () => {
    const [state,dispatch]=useReducer(messangerReducer,initialState);
    console.log(state)
    const message=state.message;
    console.log("message:",message)
    const contact=contacts.find((item)=>item.id===state.selectedId)
  return (
    <>
   <section className='flex gap-2'>
   <ContactList
    contacts={contacts}
    selectedId={state.selectedId}
    dispatch={dispatch}
    />
    <Chat
    key={contact.id}
    message={message}
    contact={contact}
    dispatch={dispatch}
    />
   </section>
      
    </>
  )
}

export default Project15
