import "./App.css";
import VideoPage from "./Components/VideoPage";
// import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; 

import Search from './Components/Search'

import axios from 'axios'

// import sampleData from './sampleData.json'

import {  useState } from 'react'

fetch(
  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
);

function App() {
  const [searchData, setSearchData] = useState({})

  async function fetchData(data) {
    try {
      const result = await axios.get(data);
      setSearchData(result.data)
      return result.data;
  } catch (e) {
    console.log(e)
  }
  }

  return (
    <div className="App">
      <Navbar />

      <Search fetchData={fetchData} setSearchData={setSearchData} searchData={searchData} />
      <VideoPage />
    </div>
  );
}

export default App;
