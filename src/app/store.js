import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slides/auth/authSlide'
import blogReducer from '../slides/blog/blogSlice'

const store = configureStore({
  reducer: {
    authAdmin: authReducer,
    blogAdmin: blogReducer
  }
})

export default store
