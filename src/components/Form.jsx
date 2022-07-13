import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postComment } from '../redux/action/actions'

const Form = () => {
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

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
    dispatch(postComment(newComment))
    setEmail('')
    setComment('')
  }

  return (
    <>
      <form className='form-comment'>
        <input
          className='email'
          name='email'
          type='email'
          required
          placeholder='example@email.com'
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
          className='button-form'
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          Enviar
        </button>
      </form>
    </>
  )
}

export default Form
