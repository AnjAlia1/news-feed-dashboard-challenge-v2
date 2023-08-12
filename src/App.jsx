import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import "./App.css";
import Weather from "./weather";
import TopStories from "./TopStories";
import Followings from "./Followings";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [followersList, setFollowersList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleSearch = (filteredPosts) => {
    setPosts((prevValue) => [...prevValue, ...filteredPosts]);
    console.log("postsafter", posts);
    console.log("handlesearch called");
  };

  useEffect(() => {
    async function Fetchpost() {
      setIsFetching(true);
      const rponse = await fetch(
        "https://inshorts.me/news/all?offset=0&limit=10"
      );
      const apdata = await rponse.json();
      if (!rponse.ok) {
        throw new Error("Failed to fetch data");
      }
      let data = apdata.data.articles;
      console.log("data", data);
      let newdatatosetpost = [...posts, ...data];
      setPosts(newdatatosetpost);
    }
    Fetchpost();
  }, []);

  return (
    <div id="main-page">
      <div>
        {posts.length != 0 && (
          <TopStories posts={posts} setIsFetching={setIsFetching} />
        )}
        <div className="followers-section">
          <Followings />
        </div>
      </div>
      <div>
        <Weather />
      </div>
    </div>
  );
};

export default App;
