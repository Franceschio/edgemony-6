import "./index.css";
import Posts from "../Post/Posts";
import { specialPost } from "../../Mock/spacialPost";

const SpecialsPosts = () => {
  return (
    <div className="specialsPosts">
      {specialPost.map((post) => (
        <Posts PostsData={post} />
      ))}
    </div>
  );
};

export default SpecialsPosts;
