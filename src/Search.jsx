import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ setPosts }) => {
  const [input, setInput] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://inshorts.deta.dev/news?category=science"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const { data } = await response.json();
      const filteredPosts = data.filter(({ title }) => title.toLowerCase().includes(input));
      setPosts(filteredPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='search-input'>
        <FaSearch className="Search-Bar"></FaSearch>
        <input className="input-for-search" value={input} onChange={(e) => setInput(e.target.value.toLowerCase())}></input>
        <button onClick={() => {
          fetchData();
        }}>Search</button>
      </div>
    </>
  )
}

export default Search;
