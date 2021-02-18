import React, { useState } from "react";

const CommentForm = ({ comments, setComments }) => {
  const [inputMsg, setInputMsg] = useState("");

  const handleSend = () => {
    const text = inputMsg;
    if (text) {
      const newMessages = [...comments, { author: "Ben", content: text }];
      setComments(newMessages);
      setInputMsg("");
    }
  };

  const handleInput = (e) => {
    setInputMsg(e.target.value);
  };

  return (
    <div className="comment-form">
      <form onSubmit={(evt) => evt.preventDefault()}>
        <textarea
          style={{ display: "block", width: "100%" }}
          value={inputMsg}
          onChange={handleInput}
        />
        <button onClick={handleSend}>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
