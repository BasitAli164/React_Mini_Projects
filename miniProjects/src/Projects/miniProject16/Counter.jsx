import React, { useContext } from 'react'
import { counterContext } from './counterContext'

const Counter = () => {
    const {count, increment,decrement}=useContext(counterContext)
  return (
    <div>
        <button onClick={increment} className='mx-3 py-1 px-8 bg-cyan-600 rounded-full'>+</button>
        <span>{count}</span>
        <button onClick={decrement} className='mx-3 py-1 px-8 bg-cyan-600 rounded-full'>-</button>
      
    </div>
  )
}

export default Counter
