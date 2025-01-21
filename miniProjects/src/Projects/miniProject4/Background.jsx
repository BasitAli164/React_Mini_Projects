import React from 'react'

const Background = ({position}) => {
  return (
    <>
    <div className={`absolute translate-[${position.x}px ,${position.y}px] w-[250px] h-[250px] bg-[rgba(200,200,0,0.2)]`}>

    </div>

      
    </>
  )
}

export default Background
