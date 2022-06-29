import React from 'react'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import '../../assets/styles/components/logo.scss'

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
