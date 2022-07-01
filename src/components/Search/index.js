import React from 'react'
import '../../assets/styles/components/search.scss'

const Search = ({ searchFor }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search"
        onChange={(e) => searchFor(e.target.value)}
      />
    </div>
  )
}

export default Search
