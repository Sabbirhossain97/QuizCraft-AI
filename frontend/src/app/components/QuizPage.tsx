import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from "@/components/ui/button"
import { SendHorizontal } from 'lucide-react';
import QuizCard from './QuizCard';
import { QuizQuestion } from '../interfaces/interfaces';
import {  useSelector } from 'react-redux'

const sampleQuestions: QuizQuestion[] = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        id: 3,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    }
];

function QuizPage() {
    const [questionCount, setQuestionCount] = useState([5]);
    const { selectedTopic, selectedSubtopic, selectedLanguage, selectedDifficulty } = useSelector((state: any) => state.preferences)

    return (
        <div className='w-4xl flex justify-center ml-24 py-10'>
            <div className='flex flex-col gap-4 w-full'>
                <div>
                    <h1 className='text-5xl font-semibold'>AI Powered Quizes</h1>
                    <h3 className='mt-2'>Create personalized quizzes based on your preferencess</h3>
                </div>
                <div className='flex gap-4 mt-6'>
                    <div className='bg-gray-100 rounded-md px-4 text-sm py-2'>
                        <h3 className='text-gray-700'>Topic: <span className='text-black font-medium'>{selectedTopic}</span></h3>
                    </div>
                    {selectedSubtopic && <div className='bg-gray-100 rounded-md px-4 text-sm py-2'>
                        <h3 className='text-gray-700'>Subtopic: <span className='text-black font-medium'>{selectedSubtopic}</span></h3>
                    </div> }
                    <div className='bg-gray-100 rounded-md px-4 text-sm py-2'>
                        <h3 className='text-gray-700'>Difficulty: <span className='text-black font-medium'>{selectedDifficulty}</span></h3>
                    </div>
                    <div className='bg-gray-100 rounded-md px-4 text-sm py-2'>
                        <h3 className='text-gray-700'>Language: <span className='text-black font-medium'>{selectedLanguage}</span></h3>
                    </div>
                </div>
                <div className='mt-4'>
                    <h1 className='text-3xl font-semibold'>Test your knowledge</h1>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Number of Questions</label>
                        <span className="text-2xl font-bold text-primary">{questionCount[0]}</span>
                    </div>
                    <Slider
                        value={questionCount}
                        onValueChange={setQuestionCount}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                    />
                    <div className="flex justify-end text-xs text-muted-foreground">
                        <span>{questionCount} questions</span>
                    </div>
                </div>
                <div>
                    <Button variant="secondary" className='border'>Generate Quiz <SendHorizontal /></Button>
                </div>
                <div>
                    <QuizCard
                        questions={sampleQuestions}
                    />
                </div>
            </div>
        </div>
    )
}

export default QuizPage