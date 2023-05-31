import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Searches.css";


function SearchResult({ video, setSearchData, setCurrentVideo }) {

  const navigate = useNavigate()

  function navigateReset() {
    console.log(video)
    setCurrentVideo(video)
    setSearchData({})
    navigate(`/videos/${video.id.videoId}`)
  }

  return (

   
    <div className="search-results">
        <img onClick={() => navigateReset()} alt="thumbnail" src={video.snippet.thumbnails.high.url} />
        <h3 className="title-card" onClick={() => navigateReset()}>{!!(video.snippet.title) ? video.snippet.title : null}</h3>

    </div>
  )
}

export default SearchResult