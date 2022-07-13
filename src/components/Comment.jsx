import React from 'react'
import { useDispatch } from 'react-redux'
// import { deleteComment } from '../features/comments/comments.slice'
import { deleteComment } from '../redux/action/actions'
import { Link } from 'react-router-dom'

const Comment = ({ id, email, comment }) => {
  const dispatch = useDispatch()
  return (
    <div className='comment'>
      <div className='content'>
        <h3>{email}</h3>
        <p>{comment}</p>
      </div>
      <div className='buttons'>
        <button
          className='button-danger'
          onClick={() => dispatch(deleteComment(id))}
        >
          Delete
        </button>
        <Link to={`/update/${id}`}>
          <button className='button-edit' type='button'>
            Edit
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Comment
