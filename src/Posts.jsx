import { useEffect, useState } from "react";
import "./App.css";

const Posts = ({ posts }) => {
  const [isReadMore, setisReadMore] = useState(true);

  return posts.map((val) => (
    <div className="news-container">
      {/* <div> */}
      <div className="news-box">
        <h4 className="author-name">{val.author}</h4>
        <h6 className="author-title">{val.title}</h6>
        {/* <img src={val.imageUrl} className="news-img"></img> */}
        {/* <div className="news-box"> */}
        <p className="author-content" value={val.id}>
          {isReadMore ? val.content.slice(0, 120) : val.content}
          <a key={val.id} value={val.id} href={val.readMoreUrl} target="*">
            {isReadMore ? "..Readmore" : "showless"}
          </a>
        </p>
        <span>{val.time}</span>
        <img src={val.imageUrl} className="news-img"></img>
      </div>
      {/* </div> */}
    </div>
  ));
};

export default Posts;
