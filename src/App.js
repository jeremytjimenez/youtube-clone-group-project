import './App.css';


fetch(
  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
);
import VideoPage from './Components/VideoPage'
import { Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <VideoPage />
    </div>
  );
}

export default App;
