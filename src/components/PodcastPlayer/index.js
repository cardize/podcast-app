import React from 'react'
import PlayButton from '../PlayButton'
import backward from '../../assets/images/backward.svg'
import forward from '../../assets/images/forward.svg'
import '../../assets/styles/components/podcast-player.scss'

const PodcastPlayer = () => {
  return (
    <div className="podcast-player-container">
      <div className="podcast-player">
        <span className="player-title">Lorem Ipsum Dolor Sit Ament</span>
        <span className="player-author">Player Author Name</span>
        <div className="player-buttons">
          <button className="fb-button">
            <img src={backward} />
          </button>
          <PlayButton />
          <button className="fb-button">
            <img src={forward} />
          </button>
        </div>
      </div>
      <div className="podcast-features"></div>
    </div>
  )
}

export default PodcastPlayer
