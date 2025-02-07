import React from "react";
import gptLogo from "../assets/gptlogo1.jpg";
import { Plus, MessageSquare, Home, Save, ArrowUpCircle } from "react-feather";

const Chatgpt = () => {
  return (
    <>
      <div className="App bg-[rgb(3,0,31)] text-white min-h-screen w-screen flex ">
        <div className="sidebar w-[300px] border-r-4 border-solid border-[rgb(110,108,108)]">
          <div className="upperSide p-9 border-b-[4px] border-solid border-[rgb(100,100,100)] h-[70%]">
            <div className="upperSideTop flex flex-col gap-y-3 items-center">
              <div className="flex items-center ml-2 gap-4">
                <img
                  src={gptLogo}
                  alt="GPT-Logo"
                  className="w-12 rounded-full  "
                />
                <span className="brand text-2xl font-bold">ChatGPT</span>
              </div>
              <button className="midbtn px-12 py-2 ml-2 rounded-md bg-[#5a4bff] flex justify-center text-xl items-center gap-2 mt-8">
                <Plus />
                New Chat
              </button>
              <div className="upperSideBottom ml-2 mt-5">
                <button className="query flex px-1 py-2 rounded-md border-[1px] border-dotted my-4  ">
                  <MessageSquare />
                  <span className="mx-2">What is Programming ?</span>
                </button>
                <button className="query flex px-[15px] py-2 rounded-md border-[1px] border-dotted my-4  ">
                  <MessageSquare />
                  <span className="mx-2">How to use an API ?</span>
                </button>
              </div>
            </div>
          </div>
          <div className="lowerside">
            <div className="listItem">
              <div className="flex">
                <Home />
                <span>Home</span>
              </div>
              <div className="flex">
                <Save />
                <span>Save</span>
              </div>
              <div className="flex">
                <ArrowUpCircle />
                <span>Upgrade to Pro</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main flex-9 bg-purple-600">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
};

export default Chatgpt;
