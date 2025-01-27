import React from 'react'

const ContactList = ({contacts,selectedId,dispatch}) => {

  return (
    <>
    <section>
        <ul>
            {
                contacts.map((item)=>(
                    <li key={item.id}>
                        <button onClick={()=>{
                            dispatch({type:''})
                        }}>
                        {selectedId===item.id?<b>{item.name}</b>:item.name}
                        </button>
                    </li>
                ))
            }
        </ul>
    </section>
      
    </>
  )
}

export default ContactList
