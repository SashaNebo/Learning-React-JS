import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

const initialState = {
  search: '',
  category: 'default',
}

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    }
  }
})

export const selectorParams = (state: RootState) => state.params
export const { setCategory, setSearch } = paramsSlice.actions
export default paramsSlice.reducer