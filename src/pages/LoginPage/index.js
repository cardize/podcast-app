import React from 'react'
import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'
import background from '../../assets/images/background.png'
import '../../assets/styles/pages/login-page.scss'
import frame from '../../assets/images/frame.svg'

const LoginPage = () => {
  return (
    <div className="login-main">
      <div className="login-background"></div>
      <img className="frame" src={frame} />
      <img className="background" src={background} />
      <span className="login-title">Episodic series of digital audio. </span>
      <LoginForm />
      <Logo />
    </div>
  )
}

export default LoginPage
