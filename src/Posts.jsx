import { useEffect, useState } from "react";
import "./App.css";
import Fetchpost from "./App.jsx";

const Posts = ({ posts }) => {
  console.log("postsatpost", posts)
  const [isReadMore, setisReadMore] = useState(true);

  return posts.articles && posts.articles.map((val) => (
    <div className="news-container">
      <div className="news-box">
        <h4 className="author-name">{val.authorName}</h4>
        <h6 className="author-title">{val.title}</h6>
        <img src={val.imageUrl} className="news-img"></img>
        <div className="news-box">
          <p className="author-content" value={val.hashId}>
            {isReadMore ? val.content.slice(0, 120) : val.content}
            <a key={val.id} value={val.id} href={val.shortenedUrl} target="*">
              {isReadMore ? "..Readmore" : "showless"}
            </a>
          </p>
          <span>{val.time}</span>
        </div>
      </div>
    </div>
  ));

};

export default Posts;
