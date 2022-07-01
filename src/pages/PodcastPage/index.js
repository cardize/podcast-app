import React from 'react'
import '../../assets/styles/pages/podcast-page.scss'
import PodcastPlayer from '../../components/PodcastPlayer'
import BackButton from '../../components/BackButton'
import HamburgerMenuButton from '../../components/HamburgerMenuButton'
import { connect } from 'react-redux'

const PodcastPage = (props) => {
  const podcast = props.podcast

  return (
    <div className="podcast-main">
      <div className="podcast-player">
        <PodcastPlayer tracks={podcast} />
      </div>
      <BackButton />
      <HamburgerMenuButton />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    podcast: state.podcast,
  }
}

export default connect(mapStateToProps)(PodcastPage)
