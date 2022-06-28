import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="logo-container">
      <NavLink to="/browse">
        <h1>Login</h1>
      </NavLink>
    </div>
  )
}

export default Header
