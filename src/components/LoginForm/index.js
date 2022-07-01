import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../assets/styles/components/login-form.scss'
import Auth from '../../auth/index.js'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/browse')
  }
  const showErrorMessage = () => {
    alert('Invalid email or password')
  }
  const login = (e) => {
    e.preventDefault()
    return Auth(email, password, navigateToHome, showErrorMessage)
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={login}>
        {error && <div className="auth__error">{error}</div>}
        <input
          className="input-login"
          id="email"
          type="email"
          value={email}
          required
          placeholder="E-mail adress"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-password"
          id="password"
          type="password"
          value={password}
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
