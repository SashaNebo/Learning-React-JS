import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { fetchUsers } from './ActionCreators'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload
        state.isLoading = false
        state.error = ''
      })
      .addCase(fetchUsers.rejected, (state, action: PayloadAction<string | unknown>) => {
        state.users = []
        state.isLoading = false
        state.error = String(action.payload)
      })
  },
})

export default userSlice.reducer
