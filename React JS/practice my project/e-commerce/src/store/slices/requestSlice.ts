import axios from 'axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DataRequestType, ParamsRequestType } from '../../types/storeTypes/request'
import { RootState } from '../index'
import { AsyncThunk } from '@reduxjs/toolkit'

interface DataState {
  data: DataRequestType[]
  status: string
  error: string
}

export const requestData: AsyncThunk<DataRequestType[]> = createAsyncThunk(
  'data/requestData',
  async ({ ...params }: ParamsRequestType) => {
    const { page } = params
    const { data } = await axios.get(`https://65a28dd542ecd7d7f0a7d164.mockapi.io/items`, {
      params: { page, limit: 10 },
    })
    
    return data
  }
)

const initialState: DataState = {
  data: [],
  status: '',
  error: '',
}

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(requestData.pending, state => {
        state.status = 'loading'
      })
      .addCase(requestData.fulfilled, (state, action: PayloadAction<DataRequestType[]>) => {
        state.data = action.payload
        state.status = 'success'
        state.error = ''
      })
      .addCase(requestData.rejected, (state, action: PayloadAction<string | unknown>) => {
        state.data = []
        state.status = 'error'
        state.error = String(action.payload)
      })
  },
})

export const selectorRequest = (state: RootState) => state.request
export const {} = requestSlice.actions
export default requestSlice.reducer
