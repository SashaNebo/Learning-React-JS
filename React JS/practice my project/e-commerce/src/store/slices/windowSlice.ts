import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

const initialState = {
  scrollX: 0,
  scrollY: 0,
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setScroll(state, action) {
      state.scrollY = action.payload
    },
  },
})

export const selectorWindow = (state: RootState) => state.window
export const { setScroll } = windowSlice.actions
export default windowSlice.reducer
