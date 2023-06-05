import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CATEGORIES } from "./constants";

const Search = ({ setPosts, setIsFetching }) => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);

  const fetchData = async () => {
    try {
      setIsFetching(true);

      const response = await fetch(

        "https://inshorts.deta.dev/news?category=all", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const { data } = await response.json();
      const filteredPosts = data.filter(({ title }) =>
        title.toLowerCase().includes(input)
      );
      setPosts(filteredPosts);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          onClick={() => {
            fetchData();
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
