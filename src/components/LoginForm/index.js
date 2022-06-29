import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/Styles/login-form.scss'

const Header = () => {
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login-form">
        <input
          className="input-login"
          id="username"
          type="text"
          placeholder="E-mail adress"
        />
        <input
          className="input-password"
          id="password"
          type="password"
          placeholder="Password"
        />
        <NavLink to="/browse">
          <button className="login-button">Login</button>
        </NavLink>
      </form>
    </div>
  )
}

export default Header
