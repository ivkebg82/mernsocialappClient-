import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import "./Home.css";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const { userName } = useParams();

  const getData = async () => {
    await axios.get("http://localhost:5000/user/getUsers").then((response) => {
      const users = response.data;
      setUsers(users);
    });
  };
  useEffect(() => {
    getData();
    return () => {
      return;
    };
  }, []);
  return (
    <div className="home">
      <ProfileSide userName={userName}></ProfileSide>
      <PostSide></PostSide>
      <RightSide />
    </div>
  );
}

export default Home;
