import React, { useState } from 'react'

const TextColorChanger = () => {
  const [colors,setColors]=useState('black')
  return (
    <>
     <section>
      <div>
        <select onChange={(e)=>setColors(e.target.value)}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="brown">Brown</option>
          <option value="pink">Pink</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
        </select>
      </div>
    <TextColorChangerChild color={colors}/>

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
      <h1 style={{color:color}}>Change the Text Color to select the color from the dropDown</h1>
      
    </div>
    </section>
    </>

  )
}