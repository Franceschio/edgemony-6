import "./index.css";

const Posts = ({ PostsData }) => {
  return (
    <div className="Post">
      <h1>{PostsData.title}</h1>
      <p>{PostsData.body}</p>
    </div>
  );
};

export default Posts;
