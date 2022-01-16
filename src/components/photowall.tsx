import Photo from "./photo";
import { Link } from "react-router-dom";
import Post from "../Models/post";

interface Props {
  posts: Post[];
}

const PhotoWall = ({ posts }: Props) => (
  <div>
    <Link className="add-icon" to="/add-photo">
      {" "}
      +{" "}
    </Link>
    <div className="photo-grid">
      {posts
        .sort((x, y) => y.id - x.id)
        .map((post, index) => (
          <Photo key={index} post={post} index={index} />
        ))}
    </div>
  </div>
);

export default PhotoWall;
