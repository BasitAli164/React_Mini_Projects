import React from 'react'

const ContactList = ({contacts,selectedId,dispatch}) => {
    console.log(selectedId)

  return (
    <>
    <section>
        <ul>
            {
                contacts.map((item)=>(
                    <li key={item.id}>
                        <button className='px-8 py-2 my-2 bg-cyan-300 rounded-full' onClick={()=>{
                            dispatch({type:'changeSelection',contactId:item.id})
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
