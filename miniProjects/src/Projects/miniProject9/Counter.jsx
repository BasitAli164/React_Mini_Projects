import React, { useState } from 'react'

const Counter = () => {
    const [counter,setConter]=useState(0);
    console.log("the counter is:",counter)
  return (
    <div>
      <button onClick={()=>setConter(counter-1)}>minus</button>
      {counter}
      <button onClick={()=>setConter(counter+1)}>Plus</button>
    </div>
  )
}

export default Counter
