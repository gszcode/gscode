import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { blogService } from './blogService'

export const resetState = createAction('Reset_all')

const initialState = {
  allBlogs: [],
  oneBlog: {},
  isLoading: false,
  isError: false,
  isCreated: false,
  isDeleted: false
}

export const addBlog = createAsyncThunk(
  'blog/create-blog',
  async (dataBlog, thunkAPI) => {
    try {
      return await blogService.addBlog(dataBlog)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteBlog = createAsyncThunk(
  'blog/delete-blog',
  async (idBlog, thunkAPI) => {
    try {
      return await blogService.deleteBlog(idBlog)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateBlog = createAsyncThunk(
  'blog/update-blog',
  async (idBlog, dataBlog, thunkAPI) => {
    try {
      return await blogService.updateBlog(idBlog, dataBlog)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    getAllBlogs: (state, action) => {
      state.allBlogs = action.payload
    },
    getABlog: (state, action) => {
      state.oneBlog = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isCreated = action.payload
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error
      })
      .addCase(deleteBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isDeleted = action.payload
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error
      })
      .addCase(updateBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.allBlogs = [...state, action.payload]
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error
      })
      .addCase(resetState, (state) => {
        state.isCreated = false
        state.isDeleted = false
      })
  }
})

export const { getAllBlogs, getABlog } = blogSlice.actions

export default blogSlice.reducer

export const getBlogs = () => {
  return (dispatch) => {
    fetch('https://blog-server-w573.onrender.com/api/blog/get-blogs')
      .then((res) => res.json())
      .then((data) => {
        dispatch(getAllBlogs(data.blogs))
      })
  }
}

export const getBlog = (idBlog) => {
  return (dispatch) => {
    fetch(`https://blog-server-w573.onrender.com/api/blog/get-blog/${idBlog}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getABlog(data.blog))
      })
  }
}
