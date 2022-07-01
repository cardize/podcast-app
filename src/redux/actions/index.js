const CURRENT_AUDIO_PLAYING = 'CURRENT_AUDIO_PLAYING'

export const addToCart = (item) => {
  return {
    type: CURRENT_AUDIO_PLAYING,
    payload: item,
  }
}
