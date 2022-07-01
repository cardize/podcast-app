import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PodcastPlayerController from '../PodcastPlayerController'
import '../../assets/styles/components/podcast-player.scss'
import Backdrop from './Backdrop'
import likeImage from '../../assets/images/like.svg'
import dislikeImage from '../../assets/images/dislike.svg'
import soundWave from '../../assets/images/sound-wave.svg'
import download from '../../assets/images/download.svg'
import treeDots from '../../assets/images/tree-dots.svg'

const PodcastPlayer = (props) => {
  const [trackIndex, setTrackIndex] = useState('')
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  console.log(props)

  const {
    audio_url,
    title,
    author,
    likes,
    dislikes,
    description,
    file_size,
    category,
  } = props.podcast

  const audioRef = useRef(new Audio(audio_url))
  const intervalRef = useRef()
  const isReady = useRef(false)

  const { duration } = audioRef.current

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%'
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `

  const startTimer = () => {
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setTrackProgress(0)
        setIsPlaying(false)
        clearInterval(intervalRef.current)
      } else {
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  const onScrub = (value) => {
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setTrackProgress(audioRef.current.currentTime)
  }

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startTimer()
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.pause()

    audioRef.current = new Audio(audio_url)
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    } else {
      isReady.current = false
    }
  }, [trackIndex])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="podcast-player-container">
      <div className="podcast-player">
        <img
          className="artwork"
          src={treeDots}
          alt={`track artwork for ${title} by ${author}`}
        />
        <span className="player-title">{title}</span>
        <span className="player-author">{author}</span>
        <PodcastPlayerController
          isPlaying={isPlaying}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress-bar"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
      <div className="podcast-features">
        <button className="social-button">
          <img src={likeImage} alt="" />
        </button>
        <span className="counts">{likes}</span>
        <span className="duration">{duration}</span>
        <span className="counts">{dislikes}</span>
        <button className="social-button">
          <img src={dislikeImage} alt="" />
        </button>
      </div>
      <div className="podcast-info">
        <div className="info-items">
          <span className="info-logos">
            <img src={soundWave} />
          </span>
          <span className="info-texts">{category}</span>
          <span className="info-logos">
            <img src={download} />
          </span>
          <span className="info-texts">{file_size}mb</span>
          <span className="tree-dots">
            <img src={treeDots} />
          </span>
        </div>
        <span className="podcast-summary">{description}</span>
      </div>
      <Backdrop trackIndex={trackIndex} isPlaying={isPlaying} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    podcast: state.podcast,
  }
}

export default connect(mapStateToProps)(PodcastPlayer)
