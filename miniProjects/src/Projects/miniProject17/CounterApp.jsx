import React from 'react'
import { useCounter } from './CounterContext'

const CounterApp = () => {
    const {count,increment,decrement}=useCounter();

  return (
    <div>
        <button className='px-10 py-2 mx-3 bg-cyan-400 rounded-full' onClick={increment}>+</button>
        <span className='font-bold text-white text-4xl mx-2'>{count}</span>
        <button className='px-10 py-2 mx-3 bg-cyan-400 rounded-full' onClick={decrement}>-</button>
      
    </div>
  )
}

export default CounterApp
