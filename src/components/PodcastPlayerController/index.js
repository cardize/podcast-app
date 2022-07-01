import React from 'react'
import PlayButton from '../PlayButton'
import backward from '../../assets/images/backward.svg'
import forward from '../../assets/images/forward.svg'
import '../../assets/styles/components/podcast-player.scss'

const PodcastPlayerController = ({
  isPlaying,
  onPlayPauseClick,
  onBackwardClick,
  onForwardClick,
}) => (
  <div className="podcast-player-container">
    <div className="podcast-player">
      <div className="player-buttons">
        <button className="fb-button" onClick={onBackwardClick}>
          <img src={backward} />
        </button>
        {isPlaying ? (
          <button
            type="button"
            className="pause"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
          >
            <PlayButton isClicked={isPlaying} />
          </button>
        ) : (
          <button
            type="button"
            className="play"
            onClick={() => onPlayPauseClick(true)}
            aria-label="Play"
          >
            <PlayButton />
          </button>
        )}
        <button
          className="fb-button"
          onClick={onForwardClick}
          aria-label="forward"
        >
          <img src={forward} />
        </button>
      </div>
    </div>
  </div>
)

export default PodcastPlayerController
