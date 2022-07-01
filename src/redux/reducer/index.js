import { CURRENT_PODCAST } from '../actions/index.js'

const INITIAL_STATE = {
  podcast: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_PODCAST:
      return { ...state, podcast: action.payload }

    default:
      return state
  }
}
