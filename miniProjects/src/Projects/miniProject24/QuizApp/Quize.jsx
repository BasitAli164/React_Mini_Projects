import React from 'react'
import './Quize.css'

const Quize = () => {
  return (
    <div className='container'>
        <h1>Quize App</h1>
        <hr />
        <h2>Which Device is required for the Internet connection?</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>LAN Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div>1 of 5 questions</div>

      
    </div>
  )
}

export default Quize
