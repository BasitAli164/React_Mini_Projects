import React, { useState } from 'react'

const Box = ({children,color,position,onMove}) => {

    // console.log(`Color is: ${color}  Position: ${position}  onMove : ${onMove}`)
    const [lastCoordinates,setLastCoordinates]=useState(null);
    const handlePointerDown=(e)=>{
        e.target.setPointerCapture(e.pointerId)
        setLastCoordinates({
            x:e.clientX,
            y:e.clientY,
        })
    }
    const handlePointerMove=(e)=>{
        if(lastCoordinates){
            setLastCoordinates({
                x:e.clientX,
                y:e.clientY,

            })
            const dx=e.clientX - lastCoordinates.x;
            console.log("Dx is:",dx)
            const dy=e.clientY - lastCoordinates.y;
            onMove(dx,dy)
        }
    }
    const handlePointerUp=(e)=>{
        setLastCoordinates(null)
    }
  return (
    <>
    <div 
    
    onPointerDown={handlePointerDown}
    onPointerMove={handlePointerMove}
    onPointerUp={handlePointerUp}
    className={`w-[100px] h-[100px] cursor-grab bg-[${color}] absolute border border-solid border-black flex justify-center items-center translate-[${position.x}px,${position.y}px]`}
    
    
    >
        {children}
    </div>

      
    </>
  )
}

export default Box
