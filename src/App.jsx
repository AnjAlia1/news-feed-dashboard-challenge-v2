import React, { useState } from "react";
import Posts from "./Posts";
import Search from "./Search";
import "./App.css";
import TopStories from "./TopStories";
import Followings from "./Followings";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Search setPosts={setPosts} />
      <TopStories setPosts={setPosts} />
      <Posts posts={posts} />
      <Followings />
    </div>
  );
};

export default App;
