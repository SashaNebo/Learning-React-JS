import { configureStore} from "@reduxjs/toolkit";
import request from './slices/requestSlice'
import params from './slices/paramsSlice'
import window from './slices/windowSlice'
import pagination from './slices/paginationSlice'

const store = configureStore({
  reducer: {
    request,
    params,
    window,
    pagination,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch