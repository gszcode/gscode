import { createSlice } from '@reduxjs/toolkit'
// import { blogService } from './blogService'

const initialState = {
  allBlogs: [],
  oneBlog: {}
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    getAllBlogs: (state, action) => {
      state.allBlogs = action.payload
    }
  }
})

export const { getAllBlogs } = blogSlice.actions

export default blogSlice.reducer

export const getBlogs = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/blog/get-blogs')
      .then((res) => res.json())
      .then((data) => {
        dispatch(getAllBlogs(data.blogs))
      })
  }
}
