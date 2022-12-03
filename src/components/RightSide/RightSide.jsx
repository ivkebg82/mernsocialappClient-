import React from "react";
import "./RightSide.css";
import Noti from "../../img/noti.png";
import Home from "../../img/home.png";
import Comment from "../../img/comment.png";
import TrendCard from "../TrendCard/TrendCard";
import { useState } from "react";
import ShareModal from "../ShareModal/ShareModal";
function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="rightSide">
      <div className="iconsBar">
        <img src={Home} alt="" />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard></TrendCard>
      <button className=" buton r_button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      ></ShareModal>
    </div>
  );
}

export default RightSide;
