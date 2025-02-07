import React from 'react';
import gptLogo from '../assets/gptlogo2.svg'
import {Plus} from 'react-feather'

const Chatgpt = () => {
  return (
    <>
    <div className="App bg-[rgb(3,0,31)] text-white min-h-screen w-screen flex">
        <div className="sidebar flex-3 border-r-4">
          <div className="upperSide">
            <div className="upperSideTop">
              <img src={gptLogo} alt="GPT-Logo" className="w-20" />
              <span className="brand">ChatGPT</span>
              <button className="midbtn"><Plus/>New Chat</button>
              <div className="upperSideBottom">
                <button className="query"><img src="" alt="" />What is Programming ?</button>
                <button className="query"><img src="" alt="" />What is Programming ?</button>
              </div>
            </div>
          </div>
          <div className="lowerside"></div>
        </div>
        <div className="main flex-9 bg-purple-600">
          <h1>hello</h1>

        </div>
    </div>
      
    </>
  )
}

export default Chatgpt
