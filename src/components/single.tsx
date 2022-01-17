import Photo from "./photo";
import Comments from "./comments";
import { useParams } from "react-router-dom";
import Post from "../Models/post";

interface Props {
  loading: boolean;
  posts: Post[];
  comments: Array<string[]>;
  startRemovingPost: (index: number, id: number) => void;
  startAddingComment: (comment: string, postId: number) => void;
}

const Single = ({
  loading,
  posts,
  comments,
  startRemovingPost,
  startAddingComment,
}: Props) => {
  const { idStr } = useParams();
  const id = Number(idStr);
  const post = posts.find((p) => p.id === id);
  const postComments = comments[id] || [];
  const index = posts.findIndex((p) => p.id === id);

  if (loading === true) {
    return <div className="loader">...loading</div>;
  } else if (post) {
    return (
      <div className="single-photo">
        <Photo
          post={post}
          index={index}
          comments={postComments}
          startRemovingPost={startRemovingPost}
        />
        <Comments
          startAddingComment={startAddingComment}
          comments={postComments}
          postId={id}
        />
      </div>
    );
  } else {
    return <h1>...no post found</h1>;
  }
};

export default Single;
