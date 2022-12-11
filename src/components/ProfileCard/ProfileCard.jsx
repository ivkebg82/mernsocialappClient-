import { useState } from "react";
import { useEffect } from "react";
import cover from "../../img/cover.jpg";
import profileImg from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

export default function ProfileCard({ userName }) {
  const profilePage = true;
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={cover} alt="" />
        <img src={profileImg} alt="" />
      </div>
      <div className="profileName">
        <span>{userName}</span>
        <span>Senior UX/UI Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,980</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My profile</span>}
      <Link to={`/page/${userName}`}>go</Link>
    </div>
  );
}
