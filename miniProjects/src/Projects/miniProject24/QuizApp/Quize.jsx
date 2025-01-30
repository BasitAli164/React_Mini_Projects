import React from 'react'

const Quize = () => {
  return (
    <div className='w-[640px] m-auto  bg-white text-[#262626] flex flex-col rounded-[10px] py-[40px] px-[50px]'>
        <h1>Quize App</h1>
        <hr  />
        <h2>Which Device is required for the Internet connection?</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>LAN Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button className='px-6 py-1 bg-stone-500 rounded-sm'>Next</button>
        <div>1 of 5 questions</div>

      
    </div>
  )
}

export default Quize
