import React from "react";

interface Props {
  postId: number;
  comments: string[];
  startAddingComment: (comment: string, postId: number) => void;
}

const Comments = ({ postId, comments, startAddingComment }: Props) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      comment: { value: string };
    };
    startAddingComment(target.comment.value, postId);
    target.comment.value = "";
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
