import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const Search = ({setResults})=>{
  const [input, setInput] = useState('');

  const Fetchdata =(input)=>{
     fetch("https://inshorts.deta.dev/news?category=science")
     .then((res)=>res.json()).
     then((json)=>{
    const results = json.data.filter((user => {
     return input&& user.title.toLowerCase().includes(input)
    }));
    console.log("data",typeof results); 
    setResults(results);
  });   
  };

  

  const HandleChange =(input)=>{
       setInput(input);
      Fetchdata(input);  
       
      //  SearchResult(input)
      //  console.log("data",result);
     }
  //  const SearchResult =()=>{
  //   // setResult(input);
  //     return(
  //       <div>{input}</div>
  //     )
  //   }
    
    // Callapi(input);
    return(
    <div className='search-input'>
        <FaSearch className="Search-Bar"></FaSearch>
      <input className="input-for-search" value={input} onChange={(e)=>HandleChange(e.target.value)}></input>
      {/* <SearchResult ></SearchResult> */}
    </div>
    )

}
