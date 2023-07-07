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
    // console.log("posts", posts)
    const rponse = await fetch('https://inshorts.me/news/all?offset=0&limit=10');
    const apdata = await rponse.json();
    if (!rponse.ok) {
      throw new Error("Failed to fetch data");
    }

    let data = (apdata.data.articles);
    console.log("posts", posts)
    var newdatatosetpost = [data];
    setPosts(newdatatosetpost);
  }

  useEffect(() => {
    Fetchpost();
  }, []);


  console.log("postsapp", posts);

  return (

    <div className="main">
      <div className="main-header">
        <h1 className="title">BB News</h1>
        <Search posts={posts} setPosts={setPosts} setIsFetching={setIsFetching} />
      </div>
      <div >
        <TopStories setPosts={setPosts} setIsFetching={setIsFetching} />
        {isFetching ? (
          <h1 className="loader">Loading...</h1>
        ) : (
          <div className="hero-section">
            <div className="posts-section">
              <Posts posts={posts} setPosts={setPosts} />
            </div>
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
        )}
      </div>
    </div>
  );
};

export default App;


// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [followersList, setFollowersList] = useState();
//   const [isFetching, setIsFetching] = useState(false);

//   async function Fetchpost(posts) {
//     console.log("posts", posts)
//     const rponse = await fetch('https://inshorts.me/news/all?offset=0&limit=10');
//     const apdata = await rponse.json();
//     if (!rponse.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     var data = (apdata.data.articles);
//     var newdatatosetpost = [...posts, data];
//     setPosts(newdatatosetpost);
//   }
//   useEffect(() => {
//     Fetchpost();
//   }, []);

// return (
//   <>
//     <h1>g</h1>
//     <div className="posts-section">
//       <Posts posts={posts} />
//     </div>

//   </>

// )



//   return (
//     <div className="main">
//       <div className="main-header">
//         <h1 className="title">BB News</h1>
//         <Search posts={posts} setPosts={setPosts} setIsFetching={setIsFetching} />
//       </div>
//       <div className="hero-section">
//         <div className="posts-section">
//           <Posts posts={posts} />
//         </div>
//       </div>
//     </div>
//   );

// };


// 




// }

















// return (
//   <div className="main">
//     <div className="main-header">
//       <h1 className="title">BB News</h1>
//       <Search posts={posts} setPosts={setPosts} setIsFetching={setIsFetching} />
//     </div>
//     <div >
//       <div className="posts-section">
//         <Posts posts={posts} />
//       </div>

{/* <Followings>
          className="followers-div"
          followersList={followersList}
          setFollowersList={setFollowersList}
          posts={posts}
        </Followings> */}

{/* <TopStories setPosts={setPosts} setIsFetching={setIsFetching} /> */ }
{/* {isFetching ? (
          <h1 className="loader">Loading...</h1>
        ) : ( */}
<>
  {/* <div className="hero-section">
            <div className="posts-section">
              <Posts posts={posts} />
            </div>
            <Followings>
              className="followers-div"
              followersList={followersList}
              setFollowersList={setFollowersList}
              posts={posts}
            </Followings>

            <p>
              {/* Followers<span value="0">{followersList.length}</span> */}
  {/* </p> */}

  {/* </div> */}
</>
{/* )} */ }
//       </div >
//     </div >
//   );
// };

// export default App;



