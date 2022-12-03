import React from "react";
import "./Post.css";
import comment from "../../img/comment.png";
import notLike from "../../img/notlike.png";
import like from "../../img/like.png";
import share from "../../img/share.png";

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.image} alt="" />
      <div className="postReact">
        <img src={data.liked ? like : notLike} alt="" />
        <img src={comment} alt="" />
        <img src={share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
