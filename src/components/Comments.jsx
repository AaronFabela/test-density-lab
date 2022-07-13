import React, { useState, useEffect } from 'react'
import Comment from './Comment'
// import { getComments } from '../features/comments/comments.slice'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../redux/action/actions'

const CommentsList = () => {
  // const { list: comentarios } = useSelector((state) => ({ ...state.app }))
  const dispatch = useDispatch()
  const comentarios = useSelector((state) => state.commentsReducer.comments)

  // const [comentarios, setComentarios] = useState([])
  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])

  return (
    <>
      {comentarios.map((comentario) => (
        <Comment
          key={comentario.id}
          id={comentario.id}
          email={comentario.correo}
          comment={comentario.comentario}
        ></Comment>
      ))}
      {/* <Comentario correo='aaron' comentario='prubea' /> */}
    </>
  )
}

export default CommentsList
