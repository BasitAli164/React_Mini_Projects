import React, { useState } from "react";

const FeedbackSystem = () => {
  const [text, setText] = useState("");
  const [isSending,setIsSending]=useState(false)
  const [isSent,setIsSent]=useState(false)
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSending(true)
    await sendMessage(text);
    setIsSending(false)
    setIsSent(true)
    setText('')
  };
  return (
    <>
      <section className="bg-gray-400 w-full h-screen flex justify-center items-center flex-col">
        <form onSubmit={handleSubmit} className="text-center">
          <textarea
            cols={50}
            rows={5}
            disabled={isSending}
            placeholder="Message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-[2px] border-solid border-gray-400 "
          ></textarea>
          <br />
          <input className="border-[2px] border-solid border-gray-500 px-8 py-2 rounded-md bg-slate-400 hover:bg-gray-500 text-stone-900 hover:cursor-pointer" type="submit" value="submit" disabled={isSending}/>
          {isSending &&(
            <span className="ml-10 text-blue-500 ">Sending...{text}</span>
          )}
        </form>
        {
            isSent ?(
                <h3>Thandk for give feedback</h3>
            ):''
        }
      </section>
    </>
  );
};

export default FeedbackSystem;

const sendMessage=(text)=>{
    return new Promise((res,rej)=>{
        setTimeout(res,2000)
    })
}
