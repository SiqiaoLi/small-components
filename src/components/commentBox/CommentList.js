import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <CommentItem key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
