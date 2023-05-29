import React from "react";
import "./App.css";

const Followings = ({ posts, followersList, setFollowersList }) => {
  const handleFollowers = (author, action) => {
    if (action === "follow") {
      setFollowersList([...followersList, author]);
    } else {
      const updatedFollowers = followersList.filter(
        (follow) => follow !== author
      );
      setFollowersList(updatedFollowers);
    }
  };

  return posts.map(({ author }) => {
    return (
      <div className="followers-list">
        <h4>{author}</h4>
        <button
          onClick={() => {
            if (followersList.includes(author)) {
              handleFollowers(author, "unfollow");
            } else {
              handleFollowers(author, "follow");
            }
          }}
        >
          {followersList.includes(author) ? "Unfollow" : "Follow"}
        </button>
      </div>
    );
  });
};

export default Followings;
