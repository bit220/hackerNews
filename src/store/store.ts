import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {newsIdsAPI} from "../services/NewsIdsService";
import {newsItemAPI} from "../services/NewsItemService";
import activeStoriesReducer from './reducers/storySlice'

const rootReducer = combineReducers({
    activeStoriesReducer,
    [newsIdsAPI.reducerPath]: newsIdsAPI.reducer,
    [newsItemAPI.reducerPath]: newsItemAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(
                    newsIdsAPI.middleware,
                    newsItemAPI.middleware
                )
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
