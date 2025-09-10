import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from './preferenceSlice'

export const store = configureStore({
    reducer: {
        preferences: preferencesReducer
    }
})