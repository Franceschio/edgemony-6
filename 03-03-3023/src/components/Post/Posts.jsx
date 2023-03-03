import "./index.css";

import Modal from "../Modal/Modal";

import { useState } from "react";

const Posts = ({ PostsData, singlePost }) => {
  // const tags = () => {
  //   alert(`i tag del post sono: ${PostsData.tags}`);
  // };

  const seeAll = () => {
    singlePost(() => PostsData);
  };

  return (
    <div className="Post">
      <h1>{PostsData.title}</h1>
      <p>{PostsData.body}</p>
      <button className="tagButton" onClick={seeAll}>
        See all
      </button>
    </div>
  );
};

export default Posts;
