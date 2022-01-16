import React from "react";

interface Props {
  postId: number;
  comments: Comment[];
  startAddingComment: (comment: Comment, postId: number) => void;
}

const Comments = ({ postId, comments, startAddingComment }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    startAddingComment(comment, postId);
    e.target.elements.comment.value = "";
  };

  return (
    <div className="comment">
      {comments.map((comment, index) => {
        return <p key={index}>{comment}</p>;
      })}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Comment" name="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
