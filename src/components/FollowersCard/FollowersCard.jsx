import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../data/followersData";
function FollowersCard() {
  return (
    <div className="followersCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img src={follower.img} alt="" className="followerImg" />

              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.surname}</span>
              </div>
            </div>
            <button className="button fc-button">follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
