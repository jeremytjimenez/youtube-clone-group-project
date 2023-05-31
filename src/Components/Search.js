import React from 'react'
import SearchResults from './SearchResults'
import { useEffect, useState } from 'react'

function Search({ fetchData, searchData, setSearchData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [apiURL, setApiURL] = useState(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${process.env.YOUTUBE_API_KEY}`)

  function handleSearchChange(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  useEffect(() => {
    setApiURL(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyDFg8wYGW2vl7Sn7g__s9YryxVVJ8GWuX0`)
  }, [searchTerm])
  

  return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            setSearchTerm("")
            e.target.reset()
            fetchData(apiURL)
            }}>
            <input id="searchbar" type="text" value={searchTerm} onChange={handleSearchChange} required />
            <button type="submit">Search</button>
        </form>

        {Object.entries(searchData).length > 0 ? <SearchResults searchData={searchData} setSearchData={setSearchData} /> : <p>No search results yet! Please submit a search above.</p>}
    </div>
  )
}

export default Search