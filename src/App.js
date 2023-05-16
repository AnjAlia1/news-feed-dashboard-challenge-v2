import logo from './logo.svg';
import './App.css';
import data from "./data.js";
import './App.css';
import { useEffect, useState } from "react";
import   { Post } from'./newsfeed';

function App() {
  return (
      <div className='content-container' >
        <Post />
    
      </div>
  )
}

export default App;
