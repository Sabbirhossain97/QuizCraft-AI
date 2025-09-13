export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface QuizPreferences {
    topic: string;
    subtopic: string;
    language: string;
    difficulty: string;
    numQuestions: number;
}
