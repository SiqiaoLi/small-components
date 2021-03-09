// not finish yet, how to deal with getsnapshotbeforeupdate
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./Snapshot.css";

const Snapshot = () => {
  const [messages, setMessages] = useState([]);
  const internalRef = useRef();
  const scrollHeightRef = useRef();
  const rootNodeRef = useRef();

  // const handleNewMessage = () => {
  //   setMessages((messages) => {
  //     return [`msg ${messages.length}`, ...messages];
  //   });
  // };
  const handleNewMessage = () => {
    setMessages((prev) => [`msg ${prev.length}`, ...prev]);
  };

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      handleNewMessage();
    }
    internalRef.current = setInterval(() => {
      if (messages.length > 200) {
        clearInterval(internalRef.current);
        return;
      }
      handleNewMessage();
    }, 1000);
    return () => {
      clearInterval(internalRef.current);
    };
  }, []);

  useEffect(() => {
    scrollHeightRef.current = rootNodeRef.current.scrollHeight;
  }, [messages]);

  useLayoutEffect(() => {
    const scrollTop = rootNodeRef.current.scrollTop;
    if (scrollTop < 5) {
      return;
    }
    rootNodeRef.current.scrollTop =
      scrollTop + (rootNodeRef.current.scrollHeight - scrollHeightRef.current);
  });

  return (
    <div>
      <h2>Messages</h2>
      <div className="snapshot-sample" ref={rootNodeRef}>
        {messages.map((msg) => (
          <div>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default Snapshot;
