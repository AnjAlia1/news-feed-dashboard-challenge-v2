import React, { useEffect, useState } from "react";
import { CATEGORIES } from "./constants";

const TopStories = ({ posts, setPosts, setIsFetching }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchSelectedCategoryData = (e) => {
    const selectedPosts = posts?.filter((val) => {
      console.log("e", e.target.value);
      return (val.categoryNames.includes(e.target.value));

    })
    setPosts(selectedPosts);
  };

  const updateClassNames = () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      if (button.disabled) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    updateClassNames();
    fetchSelectedCategoryData();
  }, [selectedCategory]);

  return (
    <div>
      <h1 className="top-stories-header">Top Stories for you</h1>
      {CATEGORIES.map((category) => {
        return (
          <button value={category.value} className="categories-button" key={category.value} disabled={selectedCategory === category.value}
            onClick={(e) => fetchSelectedCategoryData(e)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default TopStories;
