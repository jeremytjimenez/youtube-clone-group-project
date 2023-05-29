import './App.css';
import VideoPage from './Components/VideoPage'
import Search from './Components/Search'
import { Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import sampleData from './sampleData.json'

import { useEffect, useState } from 'react'

function App() {
  const [searchData, setSearchData] = useState({})

  const apiURL = `https://www.googleapis.com/youtube/v3/search?q=man&key=AIzaSyDFg8wYGW2vl7Sn7g__s9YryxVVJ8GWuX0`

  async function fetchData(data) {
    try {
      // const result = await axios.get(data);
      setSearchData(sampleData)
      // return result.data;
  } catch (e) {
    console.log(e)
  }
  }

  return (
    <div className="App">
      <VideoPage />
      <Search fetchData={fetchData} setSearchData={setSearchData} searchData={searchData} />
    </div>
  );
}

export default App;
