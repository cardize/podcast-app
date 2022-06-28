import React from 'react'
import { NavLink } from 'react-router-dom'

const Podcast = () => {
  return (
    <div className="logo-container">
      <NavLink to="/podcast">
        <h1>Podcast</h1>
      </NavLink>
    </div>
  )
}

export default Podcast
