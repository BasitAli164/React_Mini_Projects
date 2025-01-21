import React, { useState } from 'react'
import Background from './Background'


const initialPosition={
    x:0,
    y:0,
}
const Parent = () => {
    const [shap,setShap]=useState({
        color:'orange',
        position: initialPosition,
    })

    const handleMove=(dx,dy)=>{
        shap.position.x +=dx;
        shap.position.y +=dy;
    }
    const handleColorChange=(e)=>{
        setShap({
            ...shap,
            color:e.target.value,
        })
    }
  return (
    <>
    <select value={shap.color} onChange={handleColorChange} >

        <option value="orange">Orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>

    </select>
    <Background  position={initialPosition}/>
      
    </>
  )
}

export default Parent
