import React from "react";
import gptLogo from "../assets/gptlogo1.jpg";
import gptInside from "../assets/gpt.jpg";
import userImage from "../assets/user.jpg";
import {
  Plus,
  MessageSquare,
  Home,
  Save,
  ArrowUpCircle,
  Send,
} from "react-feather";

const Chatgpt = () => {
  return (
    <>
      <div className="App bg-[rgb(3,0,31)] text-white min-h-screen w-screen flex ">
        <div className="sidebar w-[370px] h-screen border-r-2 border-solid border-[rgb(110,108,108)]">
          <div className="upperSide p-9 border-b-[2px] border-solid border-[rgb(100,100,100)] h-[70%]">
            <div className="upperSideTop flex flex-col gap-y-1 ">
              <div className="flex items-center ml-1 gap-1">
                <img
                  src={gptLogo}
                  alt="GPT-Logo"
                  className="w-12 rounded-full  "
                />
                <span className="brand text-2xl font-bold">ChatGPT</span>
              </div>
              <button className="midbtn px-12 py-2 ml-1 rounded-sm bg-[#5a4bff] flex justify-center text-xl items-center gap-2 mt-8">
                <Plus />
                New Chat
              </button>
              <div className="upperSideBottom ml-1 mt-5">
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
          <div className="lowerside p-[32px]">
            <div className="listItem flex flex-col gap-4">
              <div className="flex gap-2">
                <Home />
                <span className="font-bold">Home</span>
              </div>
              <div className="flex gap-2">
                <Save />
                <span className="font-bold">Save</span>
              </div>
              <div className="flex gap-2">
                <ArrowUpCircle />
                <span className="font-bold">Upgrade to Pro</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main flex items-center justify-center flex-col max-h-[850px] mx-[50px] my-[80px] mb-0  ">
          <div className="chats overflow-hidden overflow-y-scroll scroll-smooth w-full max-w-[70rem] h-[500px ]">
            <div className="chat m-[16px] px-[3rem] py-[2rem] flex items-start text-justify">
              <img src={userImage} alt="User" className="w-[3.5rem] mr-[2rem] rounded-lg  " />
              <p className="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                omnis similique fugiat voluptatibus optio? Perferendis
                necessitatibus, temporibus porro labore, unde exercitationem
                magnam reiciendis esse rerum ipsam voluptatibus earum, aut ipsa.
                lorem400
              </p>
            </div>
            <div className="chat m-[16px] px-[3rem] py-[2rem] flex items-start text-justify bg-[rgba(28,30,58,1)] w-fit rounded-lg">
              <img
                src={gptInside}
                alt="GPT-Image"
                className="w-[3.5rem] mr-[2rem] rounded-lg  "
              />
              <p className="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                omnis similique fugiat voluptatibus optio? Perferendis
                necessitatibus, temporibus porro labore, unde exercitationem
                magnam reiciendis esse rerum ipsam voluptatibus earum, aut ipsa.
              </p>
            </div>
          </div>
          <div className="chatfooter  mt-auto w-full flex flex-col items-center justify-center">
            <div className="inp w-[45rem] p-[6px] bg-[rgba(28,30,58,1)] flex justify-center items-center rounded-md">
              <input
                type="text"
                name=""
                id=""
                placeholder="Send a message..."
                className="w-[100%] h-5 outline-none p-[1.25rem] bg-[rgba(28,30,58,1)] text-white"
              />
              <Send className="transform rotate-[45deg] w-10 h-10 text-gray-500 mr-2" />
            </div>
              <p className="text-md my-2 text-gray-300">ChatGPT can make mistakes. Check important info.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatgpt;
