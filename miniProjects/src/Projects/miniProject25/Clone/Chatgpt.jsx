import React from "react";
import gptLogo from "../assets/gptlogo1.jpg";
import gptInside from "../assets/gpt.jpg";
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
        <div className="sidebar w-[300px] border-r-2 border-solid border-[rgb(110,108,108)]">
          <div className="upperSide p-9 border-b-[2px] border-solid border-[rgb(100,100,100)] h-[70%]">
            <div className="upperSideTop flex flex-col gap-y-1 ">
              <div className="flex items-center ml-2 gap-1">
                <img
                  src={gptLogo}
                  alt="GPT-Logo"
                  className="w-12 rounded-full  "
                />
                <span className="brand text-2xl font-bold">ChatGPT</span>
              </div>
              <button className="midbtn px-12 py-2 ml-2 rounded-sm bg-[#5a4bff] flex justify-center text-xl items-center gap-2 mt-8">
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
        <div className="main flex-9 bg-purple-600">
          <div className="chats">
            <div className="chat">
              <img src={gptInside} alt="" />
              <p className="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                omnis similique fugiat voluptatibus optio? Perferendis
                necessitatibus, temporibus porro labore, unde exercitationem
                magnam reiciendis esse rerum ipsam voluptatibus earum, aut ipsa.
              </p>
            </div>
          </div>
          <div className="chatfooter">
            <div className="inp">
              <input
                type="text"
                name=""
                id=""
                placeholder="Send a message..."
              />
              <button>
                <Send />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatgpt;
