import React from 'react'
import Logo from '../../components/Logo'
import Podcast from '../../components/Podcast'
import '../../assets/Styles/browse-page.scss'

const BrowsePage = () => {
  return (
    <div className="App">
      <Logo />
      <h1>Browse Page</h1>
      <Podcast />
    </div>
  )
}

export default BrowsePage
