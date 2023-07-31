import React, { useEffect, useState } from "react";
import { CATEGORIES } from "./constants";
import Posts from "./Posts";

const TopStories = ({ posts }) => {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [postCategory, setPostCategory] = useState([]);

  // async function updatePost() {
  //   console.log("post", posts);
  //   return posts;
  // categorypost
  // }

  const handleClick = (value) => {
    setSelectedCategory(value);
    if (value == "all") {
      setPostCategory([...posts]);
    }
    else {
      let filtered_data = [...posts].filter((val) => {
        // return val.category == value;
        return val.categoryNames == value;
      })
      setPostCategory(filtered_data);
    }
    // const buttons = document.querySelectorAll("button");
    // console.log(buttons);
    // buttons.forEach((button) => {
    //   if (button.disabled) {
    //     button.classList.add("active");
    //   } else {
    //     button.classList.remove("active");
    //   }
    // });
  }

  useEffect(() => {
    setPostCategory(posts);
  }, []);

  return (
    <div>
      {/* <h1 className="top-stories-header">Top Stories for you</h1> */}
      {CATEGORIES.map((category) => {

        return (
          <button value={category.value} className="categories-button" key={category.value} disabled={selectedCategory === category.value}
            onClick={(e) => handleClick(e.target.value)}
          >
            {category.name}
          </button>
        );
      })}

      <div className="posts">
        {(posts.length != 0) && <Posts posts={postCategory} />}
        {/* {selectedCategory == "all" ? <Posts posts={posts} setPosts={setPosts} selectedCategory={selectedCategory} /> : <>
          {console.log("posts", posts)} */}
        {/* {setPosts(posts.filter((post) => post.categoryNames == selectedCategory))} */}
        {/* {setPostCategory(() => posts)} */}
        {/* {console.log("postafterset", posts)} */}
        {/* <Posts posts={posts} setPosts={setPosts} selectedCategory={selectedCategory} /> */}
        {/* </> */}
        {/* } */}
      </div>


      {/* {(posts.length == 0) ? <p>no data</p> : < Posts posts={posts} setPostCategory={setPostCategory} selectedCategory={selectedCategory} />} */}
    </div >
  );
}



export default TopStories;



{/* {console.log(selectedCategory)} */ }
{/* {console.log("innerp", posts.map((post) => post.categoryNames))} */ }
{/* {console.log("newpojjjjstbefore", postCategory)} */ }
{/* {setPostCategory(() => posts.filter((post) => post.categoryNames == selectedCategory))}
          {console.log("newpojjjjstafter", postCategory)} */}

{/* {posts.filter((post) => post.categoryNames == selectedCategory)} */ }
// const updateClassNames = () => {
  //   const buttons = document.querySelectorAll("button");

  //   buttons.forEach((button) => {
  //     if (button.disabled) {
  //       button.classList.add("active");
  //     } else {
  //       button.classList.remove("active");
  //     }
  //   });
  // };
  //  disabled={selectedCategory === category.value}

