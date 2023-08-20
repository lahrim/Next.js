import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: null, username: null }

export const exempleSlice = createSlice({
  name: 'exemple',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token
      state.username = action.payload.username
    }
  }
})

export const { login } = exempleSlice.actions
export default exempleSlice.reducer
