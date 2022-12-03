import React from "react";
import { postsData } from "../../data/postsData";
import Post from "../Post/Post";
function Posts() {
  return (
    <div className="posts">
      {postsData.map((data) => {
        return <Post data={data} key={postsData.indexOf(data)} />;
      })}
    </div>
  );
}

export default Posts;
