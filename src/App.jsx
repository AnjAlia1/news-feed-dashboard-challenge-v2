import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import "./App.css";
import Weather from "./weather";
import Newscontent from "./newscontent";
import Followings from "./Followings";

const App = () => {
  const [posts, setPosts] = useState([]);
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
        // { headers: { "Content-Type": "application/json" } }
      );

      const apdata = await rponse.json();
      if (!rponse.ok) {
        throw new Error("Failed to fetch data");
      }
      let data = apdata.data.articles;
      let newdatatosetpost = [...posts, ...data];
      setPosts(newdatatosetpost);
    }
    Fetchpost();
  }, []);

  return (
    <div id="main-page">
      <div>
        {posts.length != 0 && (
          <Newscontent posts={posts} setIsFetching={setIsFetching} />
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
