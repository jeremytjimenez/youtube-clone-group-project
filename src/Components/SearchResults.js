import React from 'react'
import SearchResult from './SearchResult'

function SearchResults({ searchData, setSearchData, setCurrentVideo }) {

  function searchResultFunction(video) {
    return (
        <SearchResult key={video.id.videoId} video={video} setSearchData={setSearchData} setCurrentVideo={setCurrentVideo}/>
    )
  }

  return (
    <div>
        {Object.entries(searchData).length > 0 ? searchData.items.map((video) => searchResultFunction(video)) : null}
    </div>
  )
}

export default SearchResults