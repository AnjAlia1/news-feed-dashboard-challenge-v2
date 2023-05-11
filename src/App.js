import logo from './logo.svg';
import './App.css';
import data from "./datas.js";
import './App.css';
import { useEffect, useState } from "react";


function Newscontainer () {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = (e) => {
    setIsReadMore(!isReadMore);
    console.log(e.target)
  };
  return (
    data.map((data) => {
      return (
        <div className="news-box" >
          <h3>{data.author}</h3>
          <div key={data.id}>
            <p value={data.id}>{isReadMore ? data.content.slice(0, 60) : data.content}
              <span key={data.id} value={data.id} onClick={(e)=>toggleReadMore(e)}>{isReadMore ? '..Readmore' : 'showless'}</span>
            </p>
          </div>
          <span>{data.time}</span>
          <div>
            <img src={data.imageUrl} className="news-img"></img>
          </div>
        </div>
      )
    })
  )
}

function App() {
  return (
      <div >
        <Newscontainer/>
      </div>
  )
}

export default App;
