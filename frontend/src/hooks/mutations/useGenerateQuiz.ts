import { useMutation } from "@tanstack/react-query";
import { generateQuiz } from "@/lib/api";
import { QuizPreferences } from "@/app/interfaces/interfaces";

export function useGenerateQuiz (){
    return useMutation({
        mutationFn: (preferences: QuizPreferences) => generateQuiz(preferences)
    })
}