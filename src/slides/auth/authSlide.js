import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from './authService'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isAuthenticated: false,
  auth: null
}

export const loginAdmin = createAsyncThunk(
  'admin/login',
  async (dataAdmin, thunkAPI) => {
    try {
      return authService.loginAdmin(dataAdmin)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      state.auth = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.isAuthenticated = true
        state.auth = action.payload
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error
        state.isSuccess = false
      })
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
