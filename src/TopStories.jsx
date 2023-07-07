import React, { useEffect, useState } from "react";
import { CATEGORIES } from "./constants";

const TopStories = ({ setPosts, setIsFetching }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchSelectedCategoryData = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(
        'https://inshorts.me/news/all'
        // `https://inshorts.deta.dev/news?category=${selectedCategory}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const { data } = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  const updateClassNames = () => {
    const buttons = document.querySelectorAll("button");
    console.log(buttons);
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

  // return (
  //   <div>
  //     <h1 className="top-stories-header">Top Stories for you</h1>
  //     {CATEGORIES.map((category) => {
  //       return (
  //         <button
  //           className="categories-button"
  //           key={category.value}
  //           disabled={selectedCategory === category.value}
  //           onClick={() => {
  //             setSelectedCategory(category.value);
  //           }}
  //         >
  //           {category.name}
  //         </button>
  //       );
  //     })}
  //   </div>
  // );
};

export default TopStories;
