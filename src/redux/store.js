import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './reducer/reducer'

export default configureStore({
  reducer: {
    commentsReducer,
  },
})
