import { useEffect, useState } from "react";
import "./App.css";
import Fetchpost from "./App.jsx";

const Posts = ({ posts, selectedCategory }) => {
  const [isReadMore, setisReadMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  return isFetching ? (
    <h1 className="loader">Loading...</h1>
  ) : (
    <>
      {posts?.map((val) => {
        return (
          <div className="news-box">
            <h1 className="author-name">{val.authorName}</h1>
            <h4 className="author-title">{val.title}</h4>
            <img src={val.imageUrl} className="news-img"></img>
            <div>
              <p className="author-content" value={val.hashId}>
                {isReadMore ? val.content.slice(0, 120) : val.content}
                <a
                  key={val.id}
                  value={val.id}
                  href={val.shortenedUrl}
                  target="*"
                >
                  {isReadMore ? "..Readmore" : "showless"}
                </a>
              </p>
              <span>{val.time}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
