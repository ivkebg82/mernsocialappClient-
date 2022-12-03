import React from "react";
import "./Profile.css";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
function Profile() {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profileCenter">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
}

export default Profile;
