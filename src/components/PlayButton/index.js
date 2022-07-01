import React from 'react'
import { useState } from 'react'
import playImage from '../../assets/images/play.svg'
import pauseImage from '../../assets/images/pause.svg'
import '../../assets/styles/components/play-button.scss'

const PlayButton = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="play-button-container">
      <span
        className="play-button"
        onClick={() => setIsClicked(() => !isClicked)}
      >
        <img
          className="play-button-image"
          src={isClicked ? pauseImage : playImage}
        />
      </span>
    </div>
  )
}

export default PlayButton
