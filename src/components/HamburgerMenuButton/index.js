import React from 'react'
import hamburgerMenu from '../../assets/images/hamburger-menu.svg'
import '../../assets/styles/components/hamburger-menu.scss'

const HamburgerMenuButton = () => {
  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-menu-button">
        <img src={hamburgerMenu} />
      </button>
    </div>
  )
}

export default HamburgerMenuButton
