import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface activeStoriesState {
    activeStories: string;
}

const initialState: activeStoriesState = {
    activeStories: 'topstories',
}

export const activeStoriesSlice = createSlice({
    name: 'activeStories',
    initialState,
    reducers: {
        setActiveStories(state, action: PayloadAction<string>) {
            state.activeStories = action.payload
        },
    }
})

export default activeStoriesSlice.reducer;