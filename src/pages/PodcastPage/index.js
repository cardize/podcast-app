import React from 'react'
import PodcastPlayer from '../../components/PodcastPlayer'
import '../../assets/styles/pages/podcast-page.scss'

const PodcastPage = () => {
  return (
    <div className="podcast-main">
      <div className="podcast-player">
        <PodcastPlayer />
      </div>
    </div>
  )
}

export default PodcastPage
