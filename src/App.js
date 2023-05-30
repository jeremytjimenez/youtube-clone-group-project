import "./App.css";
import VideoPage from "./Components/VideoPage";
// import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; 

fetch(
  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoPage />
    </div>
  );
}

export default App;
