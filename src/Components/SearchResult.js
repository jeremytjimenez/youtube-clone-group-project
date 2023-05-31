import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Searches.css";


function SearchResult(video) {

  const navigate = useNavigate()

  console.log(video.video)
  return (
    <div className="search-results">
        <img alt="thumbnail" src={video.video.snippet.thumbnails.high.url} />
        <h3 className="title-card" onClick={() => {navigate(`/videos/${video.video.id.videoId}`)}}>{!!(video.video.snippet.title) ? video.video.snippet.title : null}</h3>
    </div>
  )
}

export default SearchResult