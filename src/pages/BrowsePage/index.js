import React from 'react'
import { useState } from 'react'
import Logo from '../../components/Logo'
import Podcast from '../../components/Podcast'
import Search from '../../components/Search'
import ScrollMenu from '../../components/ScrollMenu'
import '../../assets/styles/pages/browse-page.scss'
import { connect } from 'react-redux'
import { currentPodcast } from '../../redux/actions/index'
import data from '../../assets/data/mock-data.json'

const BrowsePage = (props) => {
  const [podcasts, setPodcasts] = useState(data)

  const searchFor = (value) => {
    setPodcasts(
      data.filter((podcast) =>
        podcast.title.toLowerCase().includes(value.toLowerCase()),
      ),
    )
  }

  return (
    <div className="browse-main">
      <Logo />
      <span className="browse-title">Browse</span>
      <Search searchFor={searchFor} />
      <ScrollMenu />
      <span className="podcasts-title">Podcasts({podcasts.length})</span>
      <div className="podcasts-container">
        {podcasts.map((podcast) => (
          <div
            key={podcast.author}
            onClick={() => props.currentPodcast(podcast)}
          >
            <Podcast
              currentTime={'00:00'}
              audioDuration={'00:00'}
              podcastTitle={podcast.title}
              author={podcast.author}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    podcast: state.podcast,
    currentPodcast: state.currentPodcast,
  }
}

export default connect(mapStateToProps, { currentPodcast })(BrowsePage)
