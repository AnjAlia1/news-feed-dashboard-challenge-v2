import React from "react";
import { CATEGORIES } from "./constants";
import Posts from "./Posts";

const TopStories = ({ setPosts }) => {
  console.log("setPosts", setPosts);
  return (
    <div>
      <h1>Top Stories for you</h1>
      {CATEGORIES.map((category) => {
        return (
          <button
            onClick={() => {
              console.log("button clicked");
              const fetchcategorywisedata = async () => {
                try {
                  const response = await fetch(
                    `https://inshorts.deta.dev/news?category=${category.value}`
                  );
                  if (!response.ok) {
                    throw new Error("Failed to fetch data");
                  }
                  const { data } = await response.json();
                  console.log("data", data);
                  setPosts(data);
                } catch (error) {
                  console.error(error);
                }
              };
              fetchcategorywisedata();
            }}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};
export default TopStories;
