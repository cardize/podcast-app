import React from 'react'
import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'
import background from '../../assets/Images/background.png'
import '../../assets/Styles/login-page.scss'
import frame from '../../assets/Images/frame.svg'

const LoginPage = () => {
  return (
    <div className="main">
      <img className="frame" src={frame} />
      <img className="background" src={background} />
      <Logo />
      <LoginForm />
      <h1 className="login-title">Episodic series of digital audio. </h1>
    </div>
  )
}

export default LoginPage
