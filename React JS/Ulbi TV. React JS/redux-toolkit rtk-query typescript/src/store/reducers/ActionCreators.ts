import axios from 'axios'
import { IUser } from '../../models/IUser'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/uses`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error))

      function getErrorMessage(error: unknown) {
        if (error instanceof Error) return error.message
        return String(error)
      }
    }
  }
)


