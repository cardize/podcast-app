import React from 'react'
import logo from '../../assets/Images/logo.svg'
import { NavLink } from 'react-router-dom'
import '../../assets/Styles/logo.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <NavLink to="/">
        <img className="logo" src={logo} />
      </NavLink>
    </div>
  )
}

export default Logo
