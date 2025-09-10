import { createSlice } from "@reduxjs/toolkit"

interface PreferenceState {
    selectedTopic: string;
    selectedSubtopic: string;
    selectedLanguage: string;
    selectedDifficulty: string;
}

const initialState: PreferenceState = {
    selectedTopic: "Mathematics",
    selectedSubtopic: "Algebra",
    selectedLanguage: "English",
    selectedDifficulty: "Standard"
}

const preferenceSlice = createSlice({
    name: "preferences",
    initialState,
    reducers: {
        setTopic(state, action) {
            state.selectedTopic = action.payload;
            state.selectedSubtopic = ""
        },
        setSubtopic(state, action) {
            state.selectedSubtopic = action.payload;
        },
        setDifficulty(state, action) {
            state.selectedDifficulty = action.payload;
        },
        setLanguage(state, action) {
            state.selectedLanguage = action.payload
        }
    }
});

export const { setTopic, setSubtopic, setDifficulty, setLanguage } = preferenceSlice.actions

export default preferenceSlice.reducer;