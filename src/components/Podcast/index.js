import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/Styles/podcast.scss'
import clockIcon from '../../assets/Images/clock-icon.svg'
import testPic from '../../assets/Images/test.png'

const Podcast = () => {
  return (
    <div className="podcast-container">
      <NavLink to="/podcast">
        <span className="podcast-name">
          Lorem ipsum dolor sit amet, consectetur
        </span>
        <span className="date-container">
          <span className="podcast-date">
            23.05.2019
            <img className="clock-icon" src={clockIcon} />
            24:15:05
          </span>
          <img className="author-image" src={testPic} />
          <span className="podcast-author"> Theresa Hawkins</span>
        </span>
      </NavLink>
    </div>
  )
}

export default Podcast
