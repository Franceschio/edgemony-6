import "./index.css";

import Posts from "../Post/Posts";
import Modal from "../Modal/Modal";

import { useState } from "react";
import { useEffect } from "react";

const PostsList = ({ singlePost }) => {
  const [listPosts, setListPosts] = useState([]);
  const [postMissing, setPostMissing] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setListPosts(data.posts);
        setPostMissing(false);
      });
  }, []);

  return (
    <div className="PostsList">
      {postMissing ? <p>Attendere...</p> : null}
      {listPosts.map((post) => (
        <Posts PostsData={post} singlePost={singlePost} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
