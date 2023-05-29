import React from 'react'
import SearchResults from './SearchResults'
import { useEffect, useState } from 'react'

function Search({ fetchData, setSearchData, searchData }) {
  const apiURL = `https://www.googleapis.com/youtube/v3/search?q=man&part=snippet&key=AIzaSyDFg8wYGW2vl7Sn7g__s9YryxVVJ8GWuX0`
  let [counter, setCounter] = useState(0)

  useEffect(() => {
    fetchData()
  }, [counter])
  

  return (
    <div>
        <button onClick={() => {
            setCounter(counter++)
            console.log(searchData)
            }}>Search</button>
        <SearchResults searchData={searchData} />
    </div>
  )
}

export default Search