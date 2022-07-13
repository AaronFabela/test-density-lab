import { DELETE_COMMENT, GET_COMMENTS, POST_COMMENT } from '../type'

const initialState = {
  comments: [],
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        comments: action.payload,
      }
    case POST_COMMENT:
      return state
    default:
      return state
    case DELETE_COMMENT:
      return state
  }
}

export default commentsReducer
