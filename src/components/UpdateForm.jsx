import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateComment } from '../redux/action/actions'
import { useParams, useNavigate } from 'react-router-dom'
import GetCommentByHook from '../hooks/getCommentHook'

const UpdateForm = () => {
  const { id } = useParams()
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [detailById] = GetCommentByHook(id)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleComment = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {
      correo: email,
      comentario: comment,
    }
    dispatch(updateComment(newComment, id))
    navigate('/')
  }

  useEffect(() => {
    const data = () => {
      if (detailById) {
        console.log('entre')
        setEmail(detailById.correo)
        setComment(detailById.comentario)
      }
    }
    data()
  }, [detailById])

  return (
    <>
      <form className='form-comment'>
        <input
          className='email'
          name='email'
          placeholder='example@email.com'
          type='email'
          required
          value={email}
          onChange={handleEmail}
        />
        <textarea
          className='comment'
          name='comment'
          required
          placeholder='Hello Im a comment'
          value={comment}
          onChange={handleComment}
        />
        <button
          className='button-danger'
          onClick={(e) => {
            navigate('/')
          }}
        >
          Cancelar
        </button>
        <button
          className='button-form'
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          Update Comment
        </button>
      </form>
    </>
  )
}

export default UpdateForm
