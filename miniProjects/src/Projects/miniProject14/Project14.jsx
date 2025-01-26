import React, { useReducer } from 'react'
import {reducer,initialState} from './data'
const Project14 = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    console.log("initailState: ",state)
  return (
    <>
      
    </>
  )
}

export default Project14
