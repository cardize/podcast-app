import React from 'react'
import { NavLink } from 'react-router-dom'
import goBackImage from '../../assets/images/go-back.svg'
import '../../assets/styles/components/back-button.scss'

const BackButton = () => {
  return (
    <div className="back-button-container">
      <NavLink to="/browse">
        <button className="back-button">
          <img src={goBackImage} />
        </button>
      </NavLink>
    </div>
  )
}

export default BackButton
