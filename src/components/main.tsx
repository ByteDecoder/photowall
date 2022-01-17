import { useEffect, useState } from "react";
import PhotoWall from "./photowall";
import AddPhoto from "./add_photo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Single from "./single";
import Post from "../Models/post";

interface Props {
  startLoadingPosts: () => Promise<void>;
  startLoadingComments: () => void;
}

const Main = ({ startLoadingPosts, startLoadingComments }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await startLoadingPosts();
      setLoading(false);
      startLoadingComments();
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>
        <Link to="/"> Photowall </Link>
      </h1>
      <Router>
        <Route
          path="/single/:id"
          element={
            <Single
              loading={loading}
              posts={[]}
              comments={[]}
              startRemovingPost={function (index: number, id: number): void {
                throw new Error("Function not implemented.");
              }}
              startAddingComment={function (
                comment: string,
                postId: number
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />

        <Route
          path="/add-photo"
          element={
            <AddPhoto
              startAddingPost={function (post: Post): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route
          path="/"
          element={() => (
            <div>
              <PhotoWall
                posts={[]}
                comments={[]}
                startRemovingPost={function (index: number, id: number): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          )}
        />
      </Router>
    </div>
  );
};

export default Main;
