import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'

import VideoPage from "./Components/VideoPage";
import Navbar from "./Components/Navbar";
import Search from './Components/Search'
import Devbio from './Components/Devbio'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

import axios from 'axios'

// import sampleData from './sampleData.json'


// fetch(
//   `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
// );


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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Search fetchData={fetchData} searchData={searchData} setSearchData={setSearchData} />} />
          <Route path="/videos/:id" element={<VideoPage />} />
          <Route path="/about-us" element={<Devbio />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
