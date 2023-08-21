import React, { useEffect, useState } from "react";
import { CATEGORIES } from "./constants";
import Posts from "./Posts";

const Newscontent = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [input, setInput] = useState("");
  const [postCategory, setPostCategory] = useState([]);

  const handleSearch = () => {
    if (selectedCategory === "all") {
      const filteredPosts = posts?.filter((data) => {
        return data.title.toLowerCase().includes(input);
      });
      setPostCategory(filteredPosts);
    } else {
      const filteredsearchposts = postCategory.filter((data) => {
        return data.title?.toLowerCase().includes(input);
      });
      setPostCategory(filteredsearchposts);
    }
  };

  const handleClick = (value) => {
    setSelectedCategory(value);

    if (value == "all") {
      setPostCategory([...posts]);
    } else {
      let filtered_data = [...posts].filter((val) => {
        return val.categoryNames == value;
      });
      setPostCategory(filtered_data);
    }
  };

  useEffect(() => {
    setPostCategory(posts);
  }, []);

  return (
    <div>
      <div className="search-input">
        <h2>BB News</h2>
        <input
          className="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        ></input>
        <button className="button" onClick={(e) => handleSearch(e)}>
          Search
        </button>
      </div>
      {CATEGORIES.map((category) => {
        return (
          <button
            value={category.value}
            className="categories-button"
            key={category.value}
            disabled={selectedCategory === category.value}
            onClick={(e) => handleClick(e.target.value)}
          >
            {category.name}
          </button>
        );
      })}

      <div className="posts">
        {posts.length != 0 && <Posts posts={postCategory} />}
      </div>
    </div>
  );
};

export default Newscontent;
