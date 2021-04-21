import { SET_WORDS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORDS:
      return action.words
    default:
      return state
  }
}

export default reducer
