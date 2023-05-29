import React, { useState } from "react";
import Posts from "./Posts";
import Search from "./Search";
import "./App.css";
import TopStories from "./TopStories";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Search setPosts={setPosts} />
      <TopStories setPosts={setPosts} />
      <Posts posts={posts} />
    </div>
  );
};

export default App;
