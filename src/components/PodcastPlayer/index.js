import React, { useState, useEffect, useRef } from 'react'
import PodcastPlayerController from '../PodcastPlayerController'
import PlayButton from '../PlayButton'
import '../../assets/styles/components/podcast-player.scss'
import Backdrop from './Backdrop'
import likeImage from '../../assets/images/like.svg'
import dislikeImage from '../../assets/images/dislike.svg'
import soundWave from '../../assets/images/sound-wave.svg'
import download from '../../assets/images/download.svg'
import treeDots from '../../assets/images/tree-dots.svg'

const PodcastPlayer = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const { title, artist, color, image, audioSrc } = tracks[trackIndex]

  const audioRef = useRef(new Audio(audioSrc))
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
        toNextTrack()
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

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
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

    audioRef.current = new Audio(audioSrc)
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
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <span className="player-title">{title}</span>
        <span className="player-author">{artist}</span>
        <PodcastPlayerController
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
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
        <span className="counts">155</span>
        <span className="duration">24:09:12</span>
        <span className="counts">15</span>
        <button className="social-button">
          <img src={dislikeImage} alt="" />
        </button>
      </div>
      <div className="podcast-info">
        <div className="info-items">
          <span className="info-logos">
            <img src={soundWave} />
          </span>
          <span className="info-texts">Episode 3</span>
          <span className="info-logos">
            <img src={download} />
          </span>
          <span className="info-texts">45mb</span>
          <span className="tree-dots">
            <img src={treeDots} />
          </span>
        </div>
        <span className="podcast-summary">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen.{' '}
        </span>
      </div>
      <Backdrop
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={isPlaying}
      />
    </div>
  )
}

export default PodcastPlayer
