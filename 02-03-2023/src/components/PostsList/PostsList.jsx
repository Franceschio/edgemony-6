import "./index.css";
import Posts from "../Post/Posts";
import { ListPosts } from "../../Mock/posts";

const PostsList = () => {
  return (
    <div className="PostsList">
      {ListPosts.map((post) => (
        <Posts PostsData={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
