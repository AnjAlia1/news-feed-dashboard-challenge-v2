import React, { useState } from "react";
import "./App.css";

const Followings = () => {
  const [follow, setFollow] = useState("Folhlow");

  const FollowersList = [
    { id: 0, name: "Aditya Nair" },
    { id: 1, name: "Kameshwari" },
    { id: 2, name: "Nakul Ahuja" },
    { id: 3, name: "Arnab Mukherji" },
    { id: 4, name: "Anmol Sharma" },
    { id: 5, name: "Anjali Sharma" },
  ];
  const [isFollowed, setIsFollowed] = useState({});

  const setFollowlist = (id) => {
    setIsFollowed((prevFollowing) => ({
      ...prevFollowing,
      [id]: !prevFollowing[id],
    }));
  };

  return FollowersList.map((followers) => {
    return (
      <div className="followers-box">
        <img
          className="followers-img"
          src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <p className="followers-name">{followers.name}</p>
        <button
          className="followers-id"
          id={followers.id}
          onClick={(e) => setFollowlist(e.target.id)}
        >
          {isFollowed[followers.id] ? "Unfollow" : "Follow"}
        </button>
      </div>
    );
  });
};

export default Followings;
