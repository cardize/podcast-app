import React from 'react'
import '../../assets/styles/pages/podcast-page.scss'
import PodcastPlayer from '../../components/PodcastPlayer'
import tracks from '../../assets/test.js'
import BackButton from '../../components/BackButton'
import HamburgerMenuButton from '../../components/HamburgerMenuButton'

const PodcastPage = () => {
  return (
    <div className="podcast-main">
      <div className="podcast-player">
        <PodcastPlayer tracks={tracks} />
      </div>
      <BackButton />
      <HamburgerMenuButton />
    </div>
  )
}

export default PodcastPage
