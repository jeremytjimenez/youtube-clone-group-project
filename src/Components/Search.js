import React from 'react'
import SearchResults from './SearchResults'
import { useEffect, useState } from 'react'

function Search({ fetchData, setSearchData, searchData }) {
//   let [counter, setCounter] = useState(0)

  const [searchTerm, setSearchTerm] = useState('');
  const [apiURL, setApiURL] = useState(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyDFg8wYGW2vl7Sn7g__s9YryxVVJ8GWuX0`)

//   useEffect(() => {
//     fetchData()
//   }, [counter])

  function handleSearchChange(e) {
    setSearchTerm(e.target.value.toLowerCase());
    setApiURL(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyDFg8wYGW2vl7Sn7g__s9YryxVVJ8GWuX0`)
    console.log(searchTerm)
  }
  

  return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            fetchData(apiURL)
            }}>
            <input id="searchbar" type="text" value={searchTerm} onChange={handleSearchChange} />
            <button type="submit">Search</button>
        </form>

        <SearchResults searchData={searchData} />
    </div>
  )
}

export default Search