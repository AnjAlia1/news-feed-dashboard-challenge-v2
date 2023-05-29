import React, { useState } from "react";
import Posts from "./Posts";
import Search from "./Search";
import "./App.css";
import TopStories from "./TopStories";
import Followings from "./Followings";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [followersList, setFollowersList] = useState([]);

  return (
    <div className="main">
      <div className="main-header">
        <h1 className="title">BB News</h1>
        <Search setPosts={setPosts} />
      </div>
      <TopStories setPosts={setPosts} />
      <Posts posts={posts} />
      <Followings
        className="followers-div"
        followersList={followersList}
        setFollowersList={setFollowersList}
        posts={posts}
      />
      <p>
        Followers<span value="0">{followersList.length}</span>
      </p>
    </div>
  );
};

export default App;
