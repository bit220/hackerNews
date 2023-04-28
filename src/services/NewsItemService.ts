import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IComment, IStory} from "../types/types";
import {API_URL} from "../api";

export const newsItemAPI = createApi({
    reducerPath: 'NewsItemAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (build) => ({
        fetchNewsItem: build.query<IStory & IComment, number>({
            query: (id) => ({
                url: `/item/${id}.json`,
            }),
        }),
    }),
})

export const {useFetchNewsItemQuery} = newsItemAPI