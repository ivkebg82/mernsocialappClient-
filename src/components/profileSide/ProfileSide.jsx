import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";
import "./ProfileSide.css";
function ProfileSide({ userName }) {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard userName={userName} />
      <FollowersCard />
    </div>
  );
}

export default ProfileSide;
