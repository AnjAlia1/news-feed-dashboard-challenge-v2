import React, { useState } from "react";
import Posts from "./Posts";
import Search from "./Search";
import "./App.css";
import TopStories from "./TopStories";
import Followings from "./Followings";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [followersList, setFollowersList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <div className="main">
      <div className="main-header">
        <h1 className="title">BB News</h1>
        <Search setPosts={setPosts} setIsFetching={setIsFetching} />
      </div>
      <div className="hero-section">
        <div className="left-section"></div>
        <TopStories setPosts={setPosts} setIsFetching={setIsFetching} />
        {isFetching ? (
          <h1 className="loader">Loading...</h1>
        ) : (
          <>
            <div className="posts-section">
              <Posts posts={posts} />
            </div>
            <Followings
              className="followers-div"
              followersList={followersList}
              setFollowersList={setFollowersList}
              posts={posts}
            />
            <div className="right-section">
              <p>
                Followers<span value="0">{followersList.length}</span>
              </p>
            </div>
          </>)}
      </div>

      {/* // )} */}
    </div>
  );
};

export default App;
