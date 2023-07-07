import React from "react";
import "./App.css";

const Followings = ({ posts, followersList, setFollowersList }) => {
    const handleFollowers = (authorName, action) => {
        if (action === "follow") {
            setFollowersList([...followersList, authorName]);
        } else {
            const updatedFollowers = followersList.filter(
                (follow) => follow !== authorName
            );
            setFollowersList(updatedFollowers);
        }
    };
    // return (<h4>hi</h4>)

    return posts.articles && posts.articles.map((varr) => {
        return (
            <>
                < img src="https://media.istockphoto.com/id/1285993433/photo/carefree-african-american-girl-in-studio.jpg?s=1024x1024&w=is&k=20&c=rAwJ7wY76mBBZtbcjQItJgX2q4JpyYJXMCM1Ih_lV94=" />
                <div className="followers-list">
                    <h4>{varr.authorName}</h4>
                    <button
                        onClick={() => {
                            if (followersList.includes(varr.authorName)) {
                                handleFollowers(varr.authorName, "unfollow");
                            } else {
                                handleFollowers(varr.authorName, "follow");
                            }
                        }}
                    >
                        {followersList.includes(varr.authorName) ? "Unfollow" : "Follow"}
                    </button>
                </div>
            </ >
        );
    });
};

export default Followings;
