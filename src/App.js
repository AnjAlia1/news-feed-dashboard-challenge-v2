import logo from './logo.svg';
import './App.css';
import data from "./data.js";
import './App.css';
import { useEffect, useState } from "react";
import   { Post } from'./newsfeed';
import {Search} from './searchfunctionality';
// import searchfunctionality from './searchfunctionality';

function App() {
  return (
      <div className='content-container' >
        <Search/>
        <Post />
      </div>
  )
}

export default App;
