import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import "./Home.css";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
function Home() {
  return (
    <div className="home">
      <ProfileSide></ProfileSide>
      <PostSide></PostSide>
      <RightSide />
    </div>
  );
}

export default Home;
