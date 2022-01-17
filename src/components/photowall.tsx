import Photo from "./photo";
import { Link } from "react-router-dom";
import Post from "../Models/post";

interface Props {
  posts: Array<Post>;
  comments: Array<string[]>;
  startRemovingPost: (index: number, id: number) => void;
}

const PhotoWall = ({ posts, comments, startRemovingPost }: Props) => {
  const filterPosts = () => posts.sort((x, y) => y.id - x.id);

  return (
    <div>
      <Link className="add-icon" to="/add-photo">
        {" "}
        +{" "}
      </Link>
      <div className="photo-grid">
        {filterPosts().map((post, index) => (
          <Photo
            key={index}
            post={post}
            comments={comments[post.id]}
            index={index}
            startRemovingPost={startRemovingPost}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoWall;
