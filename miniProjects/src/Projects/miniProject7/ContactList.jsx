import React from 'react'

const ContactList = ({contacts,selectedId,onSelect}) => {
  return (
    <>
    <section>
        <ul className='mb-10'>
            {
                contacts.map((item)=>(
                    <li key={item.id}>
                        <button>{item.id===selectedId? <b>{item.name}</b>:item.name  }</button>
                    </li>
                ))
            }
        </ul>
    </section>
    </>
  )
}

export default ContactList
