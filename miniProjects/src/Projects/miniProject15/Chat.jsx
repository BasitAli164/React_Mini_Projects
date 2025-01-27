import React from 'react'

const Chat = ({contact,message,dispatch}) => {
  return (
    <>
    <section>
        <textarea
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={(e)=>{
            dispatch({type:'editMessage',message:e.target.value})
        }}
        ></textarea>
    </section>
      
    </>
  )
}

export default Chat
