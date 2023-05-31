import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchResult({ video, setSearchData }) {

  const navigate = useNavigate()

  function navigateReset() {
    setSearchData({})
    navigate(`/videos/${video.id.videoId}`)
  }

  return (
    <div>
        <img alt="thumbnail" src={video.snippet.thumbnails.high.url} />
        <h3 onClick={() => navigateReset()}>{!!(video.snippet.title) ? video.snippet.title : null}</h3>
    </div>
  )
}

export default SearchResult