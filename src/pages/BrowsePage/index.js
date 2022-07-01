import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../../components/Logo'
import Podcast from '../../components/Podcast'
import Search from '../../components/Search'
import ScrollMenu from '../../components/ScrollMenu'
import '../../assets/styles/pages/browse-page.scss'
import { connect } from 'react-redux'
import { currentAudio } from '../../redux/actions/index'
import data from '../../assets/data/mock-data.json'

const BrowsePage = (props) => {
  const [podcasts, setPodcasts] = useState(data)

  return (
    <div className="browse-main">
      <Logo />
      <span className="browse-title">Browse</span>
      <Search />
      <ScrollMenu />
      <span className="podcasts-title">Podcasts({podcasts.length})</span>
      <div className="podcasts-container">
        {podcasts.map((podcast) => (
          <Podcast
            key={podcast.author}
            currentTime={'00:00'}
            audioDuration={'00:00'}
            podcastTitle={podcast.title}
            author={podcast.author}
          />
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    currenAudioPlaying: state.currentAudioPlaying,
  }
}

export default connect(mapStateToProps, { currentAudio })(BrowsePage)
