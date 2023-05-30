import React from 'react'
import SearchResults from './SearchResults'
import { useEffect, useState } from 'react'

function Search({ fetchData, searchData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [apiURL, setApiURL] = useState(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyDFg8wYGW2vl7Sn7g__s9YryxVVJ8GWuX0`)

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
            fetchData(apiURL)
            console.log(searchTerm)
            }}>
            <input id="searchbar" type="text" value={searchTerm} onChange={handleSearchChange} />
            <button type="submit">Search</button>
        </form>

        <SearchResults searchData={searchData} />
    </div>
  )
}

export default Search