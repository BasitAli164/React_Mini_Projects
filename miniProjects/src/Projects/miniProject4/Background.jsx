import React from 'react'

const Background = ({position}) => {
    console.log("From background component the x and y position value is:",position.x,position.y)
  return (
    <>
    <div className={`absolute translate-[${position.x}px ,${position.y}px] w-[250px] h-[250px] bg-[rgba(200,200,0,0.2)]`}>

    </div>

      
    </>
  )
}

export default Background
