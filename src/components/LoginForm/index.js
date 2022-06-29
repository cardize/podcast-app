import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/styles/components/login-form.scss'

const LoginForm = () => {
  return (
    <div className="login-container">
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

export default LoginForm
