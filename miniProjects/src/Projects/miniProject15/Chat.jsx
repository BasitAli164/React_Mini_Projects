import React from 'react'

const Chat = ({contact,message,dispatch}) => {
  return (
    <>
    <section className='text-center'>
        <textarea
        className='w-72 h-40 placeholder:text-white placeholder:text-xl border-[2px] border-gray-500 border-dotted'
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={(e)=>{
            dispatch({type:'editMessage',message:e.target.value})
        }}
        ></textarea>
        <br />
        <button className='px-4 py-1 my-2 rounded-full bg-cyan-400' onClick={()=>dispatch({type:'handleClick',name:contact.name,email:contact.email,message:''})}>Send to {contact.email}</button>
    </section>
      
    </>
  )
}

export default Chat
