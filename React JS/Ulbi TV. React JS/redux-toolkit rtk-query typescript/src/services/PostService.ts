import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IPost } from "../models/IPost";

export const postAPI = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: build => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit
        }
      }),
    }),
  }),
})