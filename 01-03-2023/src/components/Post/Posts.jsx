import "./index.css";

const Posts = ({ PostsData }) => {
  const tags = () => {
    alert(`i tag del post sono: ${PostsData.tags}`);
  };

  return (
    <div className="Post">
      <h1>{PostsData.title}</h1>
      <p>{PostsData.body}</p>
      <button className="tagButton" onClick={tags}>
        Tags
      </button>
    </div>
  );
};

export default Posts;
