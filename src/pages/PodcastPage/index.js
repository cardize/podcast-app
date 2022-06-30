import React from 'react'
import '../../assets/styles/pages/podcast-page.scss'
import PodcastPlayer from '../../components/PodcastPlayer'
import tracks from '../../assets/test.js'

const PodcastPage = () => {
  return (
    <div className="podcast-main">
      <div className="podcast-player">
        <PodcastPlayer tracks={tracks} />
      </div>
    </div>
  )
}

export default PodcastPage
