import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Images/logo.svg'

const Header = () => {
  return (
    <div className="logo-container">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
    </div>
  )
}

export default Header
