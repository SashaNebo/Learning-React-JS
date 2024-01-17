import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface PaginationState {
  page: number
  limit: number
  pageList: number
  pagesArray: number[]
}

const initialState: PaginationState = {
  page: 1,
  limit: 10,
  pageList: 1,
  pagesArray: [1, 2, 3],
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action) {
      const { page, pageEvent } = action.payload

      if (pageEvent === 'default') {
        state.page = page
      }

      if (pageEvent === 'increment' && page < 5) {
        if (page - state.pageList === 2) {
          state.page += 1
          state.pageList += 1
        } else {
          state.page += 1
        }
      }

      if (pageEvent === 'decrement' && page > 1) {
        if (page - state.pageList === 0) {
          state.page -= 1
          state.pageList -= 1
        } else {
          state.page -= 1
        }
      }
    },
    setPagesArray(state) {
      state.pagesArray = [...new Array(10)]
        .map((_, i) => i + 1)
        .filter(p => p >= state.pageList && p < state.pageList + 3)
    },
  },
})

export const selectorPagination = (state: RootState) => state.pagination
export const { setPage, setPagesArray } = paginationSlice.actions
export default paginationSlice.reducer
