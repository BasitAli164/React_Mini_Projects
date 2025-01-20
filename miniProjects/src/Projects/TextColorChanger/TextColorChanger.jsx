import React, { useState } from 'react'

const TextColorChanger = () => {
  const [colors,setColors]=useState('black')
  return (
    <>
     <section className='w-full h-[75%] my-40'>
      <div className='flex  justify-evenly items-center '>
        <select className='w-[25%] p-1' onChange={(e)=>setColors(e.target.value)}>
          <option className='text-red-500' value="red">Red</option>
          <option className='text-blue-500' value="blue">Blue</option>
          <option className='text-green-500' value="green">Green</option>
          <option className='text-yellow-500' value="yellow">Yellow</option>
          <option className='text-amber-600' value="brown">Brown</option>
          <option className='text-pink-500' value="pink">Pink</option>
          <option className='text-orange-500' value="orange">Orange</option>
          <option className='text-purple-500' value="purple">Purple</option>
        </select>
    <TextColorChangerChild color={colors}/>
      </div>

    </section> 
    </>
  )
}

export default TextColorChanger

const TextColorChangerChild=({color})=>{

  return(
    <>
    <section>
    <div>
      <h1 className='text-3xl font-bold'  style={{color:color}}>Pick the color from the drop down and change color </h1>
      
    </div>
    </section>
    </>

  )
}