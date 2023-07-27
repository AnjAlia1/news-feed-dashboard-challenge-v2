import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CATEGORIES } from "./constants";
import Fetchpost from "./App.jsx"

const Search = ({ posts, setPosts, setIsFetching }) => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);


  const fetchData = async () => {
    try {
      setIsFetching(true);
      const filteredPosts = posts?.filter((data) => {
        // console.log("tot", data.title, data.title.toLowerCase().includes(input))
        return data.title.toLowerCase().includes(input)
      }
      )
      // console.log("filteredpost", filteredPosts);
      setPosts(filteredPosts);


    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };


  return (
    <>
      <div className="search-input">
        <input
          className="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        ></input>
        <button
          className="button"
          onClick={() => fetchData()}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;


// const response = await fetch('https://inshorts.me/news/all?offset=0&limit=10');
      //   // const apidata = await response.json();
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch data");
      //   }
      //   const { data } = await response.json();


