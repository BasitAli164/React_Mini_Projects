import React, { useState } from "react";

const FeedbackSystem = () => {
  const [text, setText] = useState("");
  const [isSending,setIsSending]=useState(false)
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSending(true)
    await sendMessage(text);
    setIsSending(false)
  };
  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <textarea
            cols={50}
            rows={5}
            placeholder="Message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-[2px] border-solid border-gray-400 "
            disabled={isSending}
          ></textarea>
          <br />
          <input type="submit" value="submit" />
        </form>
      </section>
    </>
  );
};

export default FeedbackSystem;
