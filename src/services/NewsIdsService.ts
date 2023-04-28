import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_URL} from "../api";

export const newsIdsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        fetchNewsIds: build.query<number[], string>({
            query: (activeStories) => ({
                url: `/${activeStories}.json?limitToFirst=100&orderBy="$key"`,
                method: 'get'
            }),
            transformResponse: (res: number[]) => {
                return res.sort((a, b) => b - a)
            }
        })
    })
})

export const {useFetchNewsIdsQuery} = newsIdsAPI