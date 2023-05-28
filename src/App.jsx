import React, { useState } from 'react';
import Posts from './Posts';
import Search from './Search';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div >
      <Search setPosts={setPosts} />
      <Posts posts={posts} />
    </div>
  )
}

export default App;
