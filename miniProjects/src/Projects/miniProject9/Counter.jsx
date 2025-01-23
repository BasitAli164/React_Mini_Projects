import React, { useState } from 'react'

const Counter = () => {
    const [counter,setConter]=useState(0);
    console.log("the counter is:",counter)
  return (
    <div>
      <button className='px-10 py-2 mx-8 rounded-full bg-cyan-300' onClick={()=>setConter(counter-1)}>minus</button>
      <span className='text-xl font-bold'>Counter: {counter}</span>
      <button className='px-10 py-2 mx-8 rounded-full bg-cyan-300' onClick={()=>setConter(counter+1)}>Plus</button>
    </div>
  )
}

export default Counter
