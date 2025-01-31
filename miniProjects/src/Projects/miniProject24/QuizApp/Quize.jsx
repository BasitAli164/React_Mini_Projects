import React, { useState } from "react";
import { data } from "./Data";
import "./Quize.css";

const Quize = () => {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [disableOptions, setDisableOptions] = useState(false);

  const question = data[index];

  const checkAns = (ans) => {
    if (!disableOptions) {
      setSelectedAnswer(ans);
      setDisableOptions(true);
      if (ans === question.ans) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setDisableOptions(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setDisableOptions(false);
  };

  return (
    <div className="w-[640px] m-auto bg-white text-[#262626] flex flex-col rounded-[10px] py-[40px] px-[50px]">
      <h1 className="text-xl mb-1 font-bold">Quiz App</h1>
      <hr className="h-[2px] border-none bg-[#707070]" />

      {!quizCompleted ? (
        <>
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
                        : disableOptions
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {option}
                </li>
              )
            )}
          </ul>
          <button
            onClick={handleNext}
            disabled={!disableOptions}
            className={`px-6 py-1 rounded-[8px] m-auto w-[300px] h-[60px] text-white font-semibold text-[25px] ${
              disableOptions
                ? "bg-[#553f9a] cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {index < data.length - 1 ? "Next" : "Finish"}
          </button>
          <div className="m-auto text-lg mt-4">
            {index + 1} of {data.length} questions
          </div>
        </>
      ) : (
        <>
          <h2 className="text-[30px] font-bold text-center mt-4">Quiz Completed!</h2>
          <p className="text-[24px] text-center mt-2">Your Score: {score} / {data.length}</p>
          <button
            onClick={restartQuiz}
            className="px-6 py-2 bg-[#553f9a] rounded-[8px] m-auto w-[300px] h-[60px] text-white font-semibold cursor-pointer text-[25px] mt-6"
          >
            Restart Quiz
          </button>
        </>
      )}
    </div>
  );
};

export default Quize;
