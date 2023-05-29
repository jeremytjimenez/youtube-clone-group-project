import React from 'react'

function SearchResult(video) {

  console.log(video.video)
  return (
    <div>
        <img alt="thumbnail" src={video.video.snippet.thumbnails.default.url} />
        <h3>{!!(video.video.snippet.title) ? video.video.snippet.title : null}</h3>
    </div>
  )
}

export default SearchResult