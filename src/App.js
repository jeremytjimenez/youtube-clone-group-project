import './App.css';
import Devbio from './Devbio';
fetch(
  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
);
function App() {
  return (
    <div className="App">
<Devbio/>
    </div>
  );
}

export default App;
