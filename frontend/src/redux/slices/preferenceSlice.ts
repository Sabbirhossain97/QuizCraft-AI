import { createSlice } from "@reduxjs/toolkit"

interface PreferenceState {
    selectedTopic: string;
    selectedSubtopic: string;
    selectedLanguage: string;
    selectedDifficulty: string;
    selectedNumQuestions: number;
}

const initialState: PreferenceState = {
    selectedTopic: "Mathematics",
    selectedSubtopic: "Algebra",
    selectedLanguage: "English",
    selectedDifficulty: "Standard",
    selectedNumQuestions: 5
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
        },
        setSelectedNumQuestions(state, action) {
            state.selectedNumQuestions = action.payload;
        }
    }
});

export const { setTopic, setSubtopic, setDifficulty, setLanguage, setSelectedNumQuestions } = preferenceSlice.actions

export default preferenceSlice.reducer;