import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import Search from "./Search";
import "./App.css";
import TopStories from "./TopStories";
import Followings from "./Followings";


const App = () => {
  const [posts, setPosts] = useState([]);
  const [followersList, setFollowersList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);


  async function Fetchpost() {

    const rponse = await fetch('https://inshorts.me/news/all?offset=0&limit=10');
    const apdata = await rponse.json();
    if (!rponse.ok) {
      throw new Error("Failed to fetch data");
    }

    let data = (apdata.data.articles);
    let newdatatosetpost = [...posts, ...data];

    setPosts(newdatatosetpost);
  }

  useEffect(() => {
    Fetchpost();
  }, []);

  return (
    <>
      <div className="main-header">
        <h1 className="title">BB News</h1>
        <Search posts={posts} setPosts={setPosts} setIsFetching={setIsFetching} />
      </div>
      <TopStories posts={posts} setPosts={setPosts} setIsFetching={setIsFetching} />
      <div >
        <Posts posts={posts}></Posts>
      </div>

    </>

  );
};


export default App;


