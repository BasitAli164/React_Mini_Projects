import React from 'react';
import gptLogo from '../assets/gptlogo2.svg'
import {Plus} from 'react-feather'

const Chatgpt = () => {
  return (
    <>
    <div className="App bg-[rgb(3,0,31)] text-white min-h-screen w-screen flex ">
        <div className="sidebar w-[300px] border-r-4 border-solid border-[rgb(110,108,108)]">
          <div className="upperSide p-5">
            <div className="upperSideTop flex flex-col gap-y-3">
              <div className='flex items-center ml-2'>
              <img src={gptLogo} alt="GPT-Logo" className="w-20" />
              <span className="brand text-3xl font-bold">ChatGPT</span>
              </div>
              <button className="midbtn px-4 py-4 ml-2 rounded-md bg-purple-400 flex justify-center text-4xl"><Plus/>New Chat</button>
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
