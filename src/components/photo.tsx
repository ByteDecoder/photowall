import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Post from "../Models/post";

interface Props {
  index: number;
  post: Post;
  comments: Array<Comment>[];
  startRemovingPost: (index: number, id: number) => void;
}

const Photo = ({ index, post, comments, startRemovingPost }: Props) => {
  const navigate = useNavigate();

  const removePhoto = () => {
    startRemovingPost(index, post.id);
    navigate("/");
  };

  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button onClick={removePhoto}>Remove</button>
        <Link className="button" to={`/single/${post.id}`}>
          <div className="comment-count">
            <div className="speech-bubble"></div>
            {comments[post.id] ? comments[post.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
};

export default Photo;
