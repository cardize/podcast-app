import { CURRENT_AUDIO_PLAYING } from '../actions/index'

const INITIAL_STATE = {
  currentAudioPlaying: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_AUDIO_PLAYING:
      return { ...state, currentAudioPlaying: action.payload }

    default:
      return state
  }
}
