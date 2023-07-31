import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import Search from "./Search";
import "./App.css";
import Weather from "./weather";
import TopStories from "./TopStories";
import Followings from "./Followings";


const App = () => {
  const [posts, setPosts] = useState([]);
  const [followersList, setFollowersList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);


  // async function Fetchpost() {

  //   const rponse = await fetch('https://inshorts.me/news/all?offset=0&limit=10');
  //   const apdata = await rponse.json();
  //   if (!rponse.ok) {
  //     throw new Error("Failed to fetch data");
  //   }

  //   let data = (apdata.data.articles);
  //   let newdatatosetpost = [...posts, ...data];
  //   setPosts(newdatatosetpost);
  // }

  useEffect(() => {

    async function Fetchpost() {

      const rponse = await fetch('https://inshorts.me/news/all?offset=0&limit=10');
      const apdata = await rponse.json();
      if (!rponse.ok) {
        throw new Error("Failed to fetch data");
      }

      let data = (apdata.data.articles);
      console.log("data", data)
      let newdatatosetpost = [...posts, ...data];
      setPosts(newdatatosetpost);
    }
    Fetchpost();

  }, []);

  // console.log("postapp", posts);

  return (
    <>
      <div className="main-header">
        <h1 className="title">BB News</h1>
        <Search posts={posts} />
      </div>
      {(posts.length != 0) && <TopStories posts={posts} />}
      {/* <Followings /> */}

      <Weather />
      {/* <div >
        <Posts posts={posts}></Posts>
      </div> */}

    </>

  );
};


export default App;


