import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const Search = ()=>{
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const Apicall =(input)=>{
    const apiData = fetch("https://inshorts.deta.dev/news?category=science").then((res)=>res.json()).then((json)=>{
    const data = (json.data.filter(task => task.title.toLowerCase().includes(input)));
    
   setResult(data);
     
  })
}
  
  const HandleChange =(input)=>{
       setInput(input);
       SearchResult(input)
       console.log("data",data)
        Apicall()
        console.log("datFa",data)
      console.log("INPUT",input);
     console.log("result",result);
       
     }
   const SearchResult =()=>{
    // setResult(input);

      return(
        <div>{input}</div>
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
