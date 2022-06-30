import React from 'react'
import Logo from '../../components/Logo'
import Podcast from '../../components/Podcast'
import Search from '../../components/Search'
import ScrollMenu from '../../components/ScrollMenu'
import '../../assets/styles/pages/browse-page.scss'

const BrowsePage = () => {
  return (
    <div className="browse-main">
      <Logo />
      <span className="browse-title">Browse</span>
      <ScrollMenu />
      <Search />
      <span className="podcasts-title">Podcasts(3)</span>
      <div className="podcasts-container">
        <Podcast />
      </div>
    </div>
  )
}

export default BrowsePage
