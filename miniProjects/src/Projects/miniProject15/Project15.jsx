import React, { useReducer } from 'react'
import { initialState, messangerReducer } from './messengerReducer'


const Project15 = () => {
    const [state,dispatch]=useReducer(messangerReducer,initialState);
  return (
    <div>
      
    </div>
  )
}

export default Project15
