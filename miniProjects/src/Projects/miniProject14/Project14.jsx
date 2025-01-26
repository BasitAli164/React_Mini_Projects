import React, { useReducer } from 'react'
import {messengerReducer,initialState} from './data'
const Project14 = () => {
    const [state,dispatch]=useReducer(messengerReducer,initialState)
    console.log("initailState: ",state)
  return (
    <>
      
    </>
  )
}

export default Project14
