import React, { useEffect } from 'react'

const Backdrop = ({ trackIndex, isPlaying }) => {
  useEffect(() => {}, [trackIndex])

  return <div className={`color-backdrop ${isPlaying ? 'playing' : 'idle'}`} />
}

export default Backdrop
