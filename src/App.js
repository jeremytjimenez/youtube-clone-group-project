import './App.css';
import VideoPage from './Components/VideoPage'
import Search from './Components/Search'
// import { Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import sampleData from './sampleData.json'

import { useEffect, useState } from 'react'

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
      <Search fetchData={fetchData} setSearchData={setSearchData} searchData={searchData} />
      <VideoPage />
    </div>
  );
}

export default App;
