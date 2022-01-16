import React from "react";
import { Link } from "react-router-dom";
import Post from "../Models/post";

interface Props {
  index: number;
  post: Post;
  comments: Array<Comment>[];
}

const Photo = ({ index, post, comments }: Props) => {
  const removePhoto = () => {
    this.props.startRemovingPost(index, post.id);
    this.props.history.push("/");
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
