import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import "./Home.css";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  /*   const getData = async () => {
    await axios.get("http://localhost:5000/user/getUsers").then((response) => {
      const users = response.data;
    });
  };
  useEffect(() => {
    getData();
    return () => {
      return;
    };
  }, []); */
  return (
    <div className="home">
      <ProfileSide></ProfileSide>
      <PostSide></PostSide>
      <RightSide />
    </div>
  );
}

export default Home;
