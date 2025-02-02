import React, { useContext } from 'react'
import { counterContext } from './counterContext'

const Counter = () => {
    const {count, increment,decrement}=useContext(counterContext)
  return (
    <div>
      
    </div>
  )
}

export default Counter
