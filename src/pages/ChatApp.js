import React, { useState } from "react";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");

  const handleInput = (e) => {
    setInputMsg(e.target.value);
  };

  const handleSend = () => {
    const text = inputMsg;
    if (text) {
      const newMessages = [...messages, text];
      setMessages(newMessages);
      setInputMsg("");
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <label htmlFor="chat">Say something</label>
        <br />
        <input id="chat" value={inputMsg} onChange={handleInput} />
        <button onClick={handleSend}>Send</button>
      </div>
      <MessageList messages={messages} />
    </div>
  );
};

const MessageList = (props) => {
  return (
    <ul>
      {props.messages.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
    </ul>
  );
};

export default ChatApp;
