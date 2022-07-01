import { CURRENT_PODCAST } from '../actions/index.js'

const INITIAL_STATE = {
  podcast: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_PODCAST:
      localStorage.setItem('podcast', JSON.stringify(action.payload))
      console.log(action.payload)
      console.log(localStorage.getItem('podcast'))
      return { ...state, podcast: action.payload }

    default:
      return state
  }
}
