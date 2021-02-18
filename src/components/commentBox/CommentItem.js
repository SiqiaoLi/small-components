const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <span className="avatar" />
      <a href="#">{comment.author}</a>
      <p>{comment.content}</p>
    </div>
  );
};

export default CommentItem;
