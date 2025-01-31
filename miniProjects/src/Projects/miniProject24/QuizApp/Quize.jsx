import React, { useState } from "react";
import { data } from "./Data";
import "./Quize.css";

const Quize = () => {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = data[index];

  const checkAns = (ans) => {
    setSelectedAnswer(ans);
  };

  return (
    <div className="w-[640px] m-auto bg-white text-[#262626] flex flex-col rounded-[10px] py-[40px] px-[50px]">
      <h1 className="text-xl mb-1 font-bold">Quiz App</h1>
      <hr className="h-[2px] border-none bg-[#707070]" />
      <h2 className="text-[25px] font-semibold">
        {index + 1}. {question.question}
      </h2>
      <ul className="mt-5">
        {[question.option1, question.option2, question.option3, question.option4].map(
          (option, idx) => (
            <li
              key={idx}
              onClick={() => checkAns(idx + 1)}
              className={`flex items-center h-[50px] pl-[20px] border border-solid border-[#686868] rounded-[8px] mb-[15px] text-[20px] cursor-pointer 
                ${
                  selectedAnswer === idx + 1
                    ? idx + 1 === question.ans
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              {option}
            </li>
          )
        )}
      </ul>
      <button
        onClick={() => {
          setIndex((prev) => (prev < data.length - 1 ? prev + 1 : prev));
          setSelectedAnswer(null);
        }}
        className="px-6 py-1 bg-[#553f9a] rounded-[8px] m-auto w-[300px] h-[60px] text-white font-semibold cursor-pointer text-[25px]"
      >
        Next
      </button>
      <div className="m-auto text-lg mt-4">{index + 1} of {data.length} questions</div>
    </div>
  );
};

export default Quize;
