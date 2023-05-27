import logo from './logo.svg';
import './App.css';
import data from "./data.js";
import './App.css';
import { useEffect, useState } from "react";
import   { Post } from'./newsfeed';
import {Search} from './searchfunctionality';
// import searchfunctionality from './searchfunctionality';

const Searchresult = ({results}) =>{
  console.log( results)
 return(
  <div className="search-result" > {results.map((result)=>{
   return(
     <>
    <p>{result.title}</p>
    </>
   )
  })}
  </div>
)
//   // <h1>hey</h1>
// //   result.map((newstitle)=>{
// //     return(
// //       <h1>newstitle</h1>
// //     )
// // // // console.log("newstitle",newstitle.title);
// //   })
//  )
{/* <div className="news-div">
        <div >
          <h6 className="author-name">{result.title}</h6>
          <img src={result.imageUrl} className="news-img"></img>
          <div className="news-box">
            {/* <p value={result.id}>
              {isReadMore ? val.content.slice(0, 120) : val.content} */}
              {/* <a key={result.id} value={result.id} href={val.readMoreUrl} target="*" > */}
                {/* {isReadMore ? "..Readmore" : "showless"} */}
              {/* </a> */}
            {/* </p> */}
      //       <span>{result.time}</span>
      //     </div>
      //   </div>
      // </div> */}
//  ) 
}
function App() {
  const [results, setResults] = useState([]);
  return (
      <div >
        <Search setResults={setResults}/>
        <Searchresult results={results}/>
        <div className="content-container">
        <Post/>
        
        </div>
      </div>
  )
}

export default App;
