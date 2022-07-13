import React from 'react'
import CommentsList from '../components/Comments'
import Form from '../components/Form'

const CommentsPage = () => {
  return (
    <div className='container'>
      <h1>Leave a comment</h1>
      <Form />
      <CommentsList />
    </div>
  )
}

export default CommentsPage
