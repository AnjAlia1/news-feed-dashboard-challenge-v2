import React, { useEffect, useState } from "react";
import { CATEGORIES } from "./constants";
import Posts from "./Posts";

const TopStories = ({ posts, setPosts }) => {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [newPost, setnewPost] = useState([]);
  const [newstate, setstateVariable] = useState(false);


  // const fetchSelectedCategoryData = (category) => {
  //   const selectedPosts = posts.filter((val) => {
  //     console.log("sed", val);
  //     return (val.categoryNames.includes(category));
  //   })
  //   console.log("seg", selectedPosts);
  //   setPosts(selectedPosts);

  // }



  const handleClick = (value) => {
    console.log("value", value);
    setSelectedCategory(value);
    // console.log("posts", posts);
    // console.log("posts category", posts.map((post) => post.categoryNames))
    // setnewPost(() => posts.filter((post) => post.categoryNames == value))
    // console.log("poststafterfilter", newPost)
  }

  useEffect(() => {

  }, [selectedCategory]);

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
        {selectedCategory == "all" ? <Posts posts={posts} setPosts={setPosts} selectedCategory={selectedCategory} /> : <>
          {console.log("posts", posts)}
          {/* {setPosts(posts.filter((post) => post.categoryNames == selectedCategory))} */}
          {/* {setnewPost(() => posts)} */}
          {/* {console.log("postafterset", posts)} */}
          <Posts posts={posts} setPosts={setPosts} selectedCategory={selectedCategory} />
        </>
        }
      </div>


      {/* {(posts.length == 0) ? <p>no data</p> : < Posts posts={posts} setnewPost={setnewPost} selectedCategory={selectedCategory} />} */}
    </div >
  );
}



export default TopStories;



{/* {console.log(selectedCategory)} */ }
{/* {console.log("innerp", posts.map((post) => post.categoryNames))} */ }
{/* {console.log("newpojjjjstbefore", newPost)} */ }
{/* {setnewPost(() => posts.filter((post) => post.categoryNames == selectedCategory))}
          {console.log("newpojjjjstafter", newPost)} */}

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

