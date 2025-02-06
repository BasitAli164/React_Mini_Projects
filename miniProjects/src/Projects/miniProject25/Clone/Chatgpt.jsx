import React from 'react';
import logo from '../assets/imglogo.jpg'

const Chatgpt = () => {
  return (
    <>
    <div className="App">
        <div className="sidebar">
          <div className="upperSide">
            <div className="upperSideTop">
              <img src={logo} alt="" className="logo" />
              <span className="brand">ChatGPT</span>
              <button className="midbtn"><img src="" alt="" className="addBtn" />New Chat</button>
              <div className="upperSideBottom">
                <button className="query"><img src="" alt="" />What is Programming ?</button>
                <button className="query"><img src="" alt="" />What is Programming ?</button>
              </div>
            </div>
          </div>
          <div className="lowerside"></div>
        </div>
        <div className="main">

        </div>
    </div>
      
    </>
  )
}

export default Chatgpt
