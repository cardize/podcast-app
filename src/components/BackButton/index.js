import React from 'react'
import { NavLink } from 'react-router-dom'

const BackButton = () => {
  return (
    <div className="logo-container">
      <NavLink to="/browse">
        <h2>Go Back</h2>
      </NavLink>
    </div>
  )
}

export default BackButton
