import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Modal from 'react-modal'

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

Modal.setAppElement('body');

function App() {
  const [searchData, setSearchData] = useState({})
  const [currentVideo, setCurrentVideo] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false)
  const [error, setError] = useState({
    status: 0,
    statusText: ''
  })

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function fetchData(data) {
    try {
      const result = await axios.get(data);
      setSearchData(result.data);
      return result.data;
  } catch (e) {
    console.log(e.response)
    setError({
      status: e.response.status,
      statusText: e.response.statusText
    })
    openModal()
    return e;
  }
  }

  return (
    <div className="App">
      <Router>
        <Navbar setSearchData={setSearchData} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>{error.status} - {error.statusText}</h2>
          <button onClick={closeModal}>close</button>
        </Modal>
        <Routes>
          <Route path="/" element={<Search fetchData={fetchData} searchData={searchData} setSearchData={setSearchData} setCurrentVideo={setCurrentVideo} />} />
          <Route path="/videos/:id" element={<VideoPage currentVideo={currentVideo} />} />
          <Route path="/about" element={<Devbio />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
