import React, { useState } from "react";
import "./App.css";

const Followings = () => {
  const [follow, setFollow] = useState("Folhlow");

  const FollowersList = [
    { id: 0, name: "Aditya Nair", isFollowed: true },
    { id: 1, name: "Kameshwari", isFollowed: true },
    { id: 2, name: "Nakul Ahuja", isFollowed: true },
    { id: 3, name: "Arnab Mukherji", isFollowed: true },
    { id: 4, name: "Anmol Sharma", isFollowed: true },
    { id: 5, name: "Anjali Sharma", isFollowed: false },
  ];
  const [ids, setids] = useState([]);
  const [isFollowed, setIsFollowed] = useState(true);
  const setFollowlist = (id) => {
    setids((prevvalue) => [...prevvalue, ...id]);
    // setPosts((prevValue) => [...prevValue, ...filteredPosts]);
    console.log("ids", ids);
    if (!ids?.includes(id)) setIsFollowed((pervFollowing) => !pervFollowing);
  };

  return FollowersList.map((followers) => {
    return (
      <div className="followers-box">
        <img
          className="followers-img"
          src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <p className="followers-name">{followers.name}</p>
        <button
          className="followers-id"
          id={followers.id}
          onClick={(e) => setFollowlist(e.target.id)}
        >
          {/* {followers.isFollowed} */}
          {isFollowed ? "follow" : "unfollow"}
        </button>
      </div>
    );
  });
};
// return (<h4>hi</h4>)

//   return (
//     posts.articles &&
//     posts.articles.map((varr) => {
//       return (
//         <>
//           <img src="https://media.istockphoto.com/id/1285993433/photo/carefree-african-american-girl-in-studio.jpg?s=1024x1024&w=is&k=20&c=rAwJ7wY76mBBZtbcjQItJgX2q4JpyYJXMCM1Ih_lV94=" />
//           <div className="followers-list">
//             <h4>{varr.authorName}</h4>
//             <button
//               onClick={() => {
//                 if (followersList.includes(varr.authorName)) {
//                   handleFollowers(varr.authorName, "unfollow");
//                 } else {
//                   handleFollowers(varr.authorName, "follow");
//                 }
//               }}
//             >
//               {followersList.includes(varr.authorName) ? "Unfollow" : "Follow"}
//             </button>
//           </div>
//         </>
//       );
//     })
//   );
// };

export default Followings;
