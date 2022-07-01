import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/styles/components/podcast.scss'
import clockIcon from '../../assets/images/clock-icon.svg'
import testPic from '../../assets/images/test.png'
import background from '../../assets/images/podcast-background.jpeg'
import PlayButton from '../PlayButton'

const Podcast = ({
  currentTime,
  audioDuration,
  podcastTitle,
  artwork,
  author,
  authorImage,
}) => {
  return (
    <div className="podcast-container">
      <NavLink to="/podcast">
        <img
          className="podcast-background"
          src={artwork ? artwork : background}
        ></img>
        <span className="podcast-name">
          {podcastTitle ? podcastTitle : 'Podcast Title'}
        </span>
        <span className="date-container">
          <span className="podcast-date">
            {currentTime ? currentTime : '00/00'}
            <img className="clock-icon" src={clockIcon} />
            {audioDuration ? audioDuration : '00/00'}
          </span>
          <img
            className="author-image"
            src={authorImage ? authorImage : testPic}
          />
          <span className="podcast-author"> {author ? author : 'Artist'}</span>
        </span>
        <PlayButton />
      </NavLink>
    </div>
  )
}

export default Podcast
