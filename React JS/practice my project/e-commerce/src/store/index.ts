import { configureStore} from "@reduxjs/toolkit";
import request from './slices/requestSlice'
import params from './slices/paramsSlice'
import window from './slices/windowSlice'
import pagination from './slices/paginationSlice'

export const store = configureStore({
  reducer: {
    request,
    params,
    window,
    pagination,
  },
})

export type RootState = ReturnType<typeof store.getState>


// EnhancedStore<{
//     request: DataState;
//     params: {
//         search: string;
//         category: string;
//     };
//     window: {
//         scrollX: number;
//         scrollY: number;
//   };
//    pagination: {
//         page: number;
//         pageList: number;
//         pagesArray: number[];
//     };
// }, UnknownAction, Tuple<...>>