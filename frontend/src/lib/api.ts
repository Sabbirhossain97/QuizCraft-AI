import axios from 'axios'
import { QuizPreferences } from '@/app/interfaces/interfaces';

export const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        "Content-Type": "application/json"
    }
});

export async function generateQuiz(preferences: QuizPreferences) {
    const res = await api.post('/generate-quiz', preferences);
    return res.data;
}

