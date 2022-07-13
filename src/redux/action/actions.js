import {
  DELETE_COMMENT,
  GET_COMMENTS,
  POST_COMMENT,
  UPDATE_COMMENT,
} from '../type'
import {
  deleteCommentApi,
  getCommentsApi,
  postCommentApi,
  updateCommentApi,
} from '../../api/axiosRequest'

const getComments = () => {
  return function (dispatch) {
    return getCommentsApi().then((res) => {
      dispatch({
        type: GET_COMMENTS,
        payload: res.data,
      })
    })
  }
}

const postComment = (request) => {
  return function (dispatch) {
    dispatch({
      type: POST_COMMENT,
      payload: false,
    })
    return postCommentApi(request).then((res) => {
      dispatch({
        type: POST_COMMENT,
        payload: true,
      })
      dispatch(getComments())
    })
  }
}

const updateComment = (request, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_COMMENT,
      payload: false,
    })
    return updateCommentApi(request, id).then((res) => {
      dispatch({
        type: UPDATE_COMMENT,
        payload: true,
      })
    })
  }
}

const deleteComment = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_COMMENT,
      payload: false,
    })
    return deleteCommentApi(id).then((res) => {
      dispatch({
        type: UPDATE_COMMENT,
        payload: true,
      })
      dispatch(getComments())
    })
  }
}

export { getComments, postComment, updateComment, deleteComment }
