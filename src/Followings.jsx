import React, { useState } from "react";
import "./App.css";

const Followings = () => {

    const [follow, setFollow] = useState('Follow');

    const FollowersList = ['Aditya Nair', 'Kameshwari', 'Nakul Ahuja', 'Arnab Mukherji', 'Anmol Sharma', 'Anjali Sharma']
    return (
        FollowersList.map((followers) => {
            return (
                <>
                    <p>{followers}</p>
                    <button onClick={() => setFollow('Unfollow')}>{follow}</button>
                </>

            )
        })
    )
    // const handleFollowers = (authorName, action) => {
    //     if (action === "follow") {
    //         setFollowersList([...followersList, authorName]);
    //     } else {
    //         const updatedFollowers = followersList.filter(
    //             (follow) => follow !== authorName
    //         );
    //         setFollowersList(updatedFollowers);
    //     }
    // };
    // // return (<h4>hi</h4>)

    // return posts.articles && posts.articles.map((varr) => {
    //     return (
    //         <>
    //             < img src="https://media.istockphoto.com/id/1285993433/photo/carefree-african-american-girl-in-studio.jpg?s=1024x1024&w=is&k=20&c=rAwJ7wY76mBBZtbcjQItJgX2q4JpyYJXMCM1Ih_lV94=" />
    //             <div className="followers-list">
    //                 <h4>{varr.authorName}</h4>
    //                 <button
    //                     onClick={() => {
    //                         if (followersList.includes(varr.authorName)) {
    //                             handleFollowers(varr.authorName, "unfollow");
    //                         } else {
    //                             handleFollowers(varr.authorName, "follow");
    //                         }
    //                     }}
    //                 >
    //                     {followersList.includes(varr.authorName) ? "Unfollow" : "Follow"}
    //                 </button>
    //             </div>
    //         </ >
    // );
    // });
};

export default Followings;
