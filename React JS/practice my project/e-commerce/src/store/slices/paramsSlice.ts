import { createSlice } from '@reduxjs/toolkit'
import { StoreType } from '../../types/storeTypes/store'

const initialState = {
  search: '',
  category: '',
}

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {}
})

export const selectorParams = (state: StoreType) => state.params
export const { } = paramsSlice.actions
export default paramsSlice.reducer