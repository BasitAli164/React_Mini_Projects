import React from 'react'

const Quize = () => {
  return (
    <div className='w-[640px] m-auto  bg-white text-[#262626] flex flex-col rounded-[10px] py-[40px] px-[50px]'>
        <h1>Quize App</h1>
        <hr className='h-[2px] border-none bg-[#707070]' />
        <h2 className='text-[20px] font-semibold '>Which Device is required for the Internet connection?</h2>
        <ul>
            <li className='flex  items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer'>Modem</li>
            <li className='flex  items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer'>Router</li>
            <li className='flex  items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer'>LAN Cable</li>
            <li className='flex  items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer'>Pen Drive</li>
        </ul>
        <button className='px-6 py-1 bg-stone-500 rounded-sm'>Next</button>
        <div>1 of 5 questions</div>

      
    </div>
  )
}

export default Quize
