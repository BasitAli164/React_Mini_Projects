import React from 'react';
import gptLogo from '../assets/gptlogo1.jpg'
import {Plus,MessageSquare} from 'react-feather'

const Chatgpt = () => {
  return (
    <>
    <div className="App bg-[rgb(3,0,31)] text-white min-h-screen w-screen flex ">
        <div className="sidebar w-[300px] border-r-4 border-solid border-[rgb(110,108,108)]">
          <div className="upperSide p-5">
            <div className="upperSideTop flex flex-col gap-y-3">
              <div className='flex items-center ml-2 gap-4'>
              <img  src={gptLogo} alt="GPT-Logo" className="w-20 rounded-full " />
              <span className="brand text-3xl font-bold">ChatGPT</span>
              </div>
              <button className="midbtn px-4 py-3 ml-2 rounded-md bg-purple-400 flex justify-center text-2xl items-center gap-2"><Plus/>New Chat</button>
              <div className="upperSideBottom ml-2 mt-5">
                <button className="query flex px-3 py-2 rounded-md border-[1px] border-dotted my-4  "><MessageSquare/><span className='mx-2'>What is Programming ?</span></button>
                <button className="query flex px-8 py-2 rounded-md border-[1px] border-dotted my-4  "><MessageSquare/><span className='mx-2'>How to use API ?</span></button>
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
