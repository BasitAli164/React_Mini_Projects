import React, { useState } from 'react'
import { counterContext } from './counterContext'

const CounterProvider = () => {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
      
    </div>
  )
}

export default CounterProvider
