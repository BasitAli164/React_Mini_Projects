import React, { useState } from "react";

const FeedbackSystem = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
          ></textarea>
          <br />
          <input type="submit" value="submit" />
        </form>
      </section>
    </>
  );
};

export default FeedbackSystem;
