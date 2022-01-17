import { useNavigate } from "react-router-dom";
import Post from "../Models/post";

interface Props {
  startAddingPost: (post: Post) => void;
}

const AddPhoto = ({ startAddingPost }: Props) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      link: { value: string };
      description: { value: string };
    };
    const imageLink = target.link.value;
    const description = target.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    } as Post;

    if (description && imageLink) {
      startAddingPost(post);
      navigate("/");
    }
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Photo Link" name="link" />
          <input
            type="text"
            placeholder="Photo Description"
            name="description"
          />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddPhoto;
