import React, { useState } from "react";
import { data } from "./Data";

const Quize = () => {
    const [index,setIndex]=useState(0);
    const [question,setQuestion]=useState(data[index])
  return (
    <div className="w-[640px] m-auto  bg-white text-[#262626] flex flex-col rounded-[10px] py-[40px] px-[50px]">
      <h1 className="text-xl mb-1 font-bold">Quize App</h1>
      <hr className="h-[2px] border-none bg-[#707070]" />
      <h2 className="text-[25px] font-semibold ">
        {index+1}. {question.question}
      </h2>
      <ul className="mt-5">
        <li className="flex  items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer">
          {question.option1}
        </li>
        <li className="flex  items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer">
          {question.option2}
        </li>
        <li className="flex  items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer">
          {question.option3}
        </li>
        <li className="flex  items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer">
          {question.option4}
        </li>
      </ul>
      <button className="px-6 py-1 bg-[#553f9a] rounded-[8px] m-auto w-[300px] h-[60px] text-[#fff] font-semibold cursor-pointer text-[25px]">
        Next
      </button>
      <div className="m-auto text-lg mt-4">1 of 5 questions</div>
    </div>
  );
};

export default Quize;
