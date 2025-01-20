import React, { useState } from 'react'

const TextColorChanger = () => {
  const [colors,setColors]=useState('black')
  return (
    <>
     <section>
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