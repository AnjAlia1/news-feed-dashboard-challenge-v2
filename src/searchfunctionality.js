import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const Search = ()=>{
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const Apicall =(input)=>{
    const apiData = fetch("https://inshorts.deta.dev/news?category=science").then((res)=>res.json()).then((json)=>{
    const api = (json.data.filter(task => task.title.toLowerCase().includes(input)));
    console.log("api",api);
   
  })
}
  
  const HandleChange =(input)=>{
       setInput(input)
       Apicall(input)
     }
   const SearchResult =(input)=>{
    // setResult(input);
      return(
        <div>{result}</div>
      )
    }
    
    // Callapi(input);
    return(
    <div className='search-input'>
        <FaSearch className="Search-Bar"></FaSearch>
      <input className="input-for-search" value={input} onChange={(e)=>HandleChange(e.target.value)}></input>
      <SearchResult  ></SearchResult>
    </div>
    )

}
