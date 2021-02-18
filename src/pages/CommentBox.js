import CommentForm from "../components/commentBox/CommentForm";
import CommentList from "../components/commentBox/CommentList";
import { useState } from "react";
import "../components/commentBox/CommentBox.css";

const CommentBox = () => {
  const [comments, setComments] = useState(initComments);

  return (
    <div className="commment-box">
      <h1>Comments ({comments.length})</h1>
      <CommentList comments={comments} />
      <CommentForm comments={comments} setComments={setComments} />
    </div>
  );
};

const initComments = [
  { author: "Ben", content: "hi" },
  { author: "Leo", content: "Hi" },
  { author: "Jonny", content: "you" },
];

export default CommentBox;
