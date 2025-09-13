import { Slider } from '@/components/ui/slider';
import { Button } from "@/components/ui/button"
import { SendHorizontal, RotateCcw } from 'lucide-react';
import QuizCard from './QuizCard';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedNumQuestions } from '@/redux/slices/preferenceSlice';
import { useGenerateQuiz } from '@/hooks/mutations/useGenerateQuiz';

function QuizPage() {
    const dispatch = useDispatch();
    const { mutate: generateQuiz, data, isPending, reset } = useGenerateQuiz();
    const { selectedTopic, selectedSubtopic, selectedLanguage, selectedDifficulty, selectedNumQuestions } = useSelector((state: any) => state.preferences)

    const handleGenerateQuiz = () => {
        generateQuiz({
            topic: selectedTopic,
            subtopic: selectedSubtopic,
            language: selectedLanguage,
            difficulty: selectedDifficulty,
            numQuestions: selectedNumQuestions,
        })
    }

    const handleReset = ()=> {
        reset()
    }

    return (
        <div className='w-4xl flex justify-center ml-24 py-10'>
            <div className='flex flex-col gap-4 w-full'>
                <div>
                    <h1 className='text-5xl font-semibold'>AI Powered Quizes</h1>
                    <h3 className='mt-2'>Create personalized quizzes based on your preferences and test your knowledge</h3>
                </div>
                <div className='flex gap-4 mt-6'>
                    <div className='bg-gray-100 rounded-md px-4 text-sm py-2'>
                        <h3 className='text-gray-700'>Topic: <span className='text-black font-medium'>{selectedTopic}</span></h3>
                    </div>
                    {selectedSubtopic && <div className='bg-gray-100 rounded-md px-4 text-sm py-2'>
                        <h3 className='text-gray-700'>Subtopic: <span className='text-black font-medium'>{selectedSubtopic}</span></h3>
                    </div>}
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
                        <span className="text-2xl font-bold text-primary">{selectedNumQuestions}</span>
                    </div>
                    <Slider
                        value={[selectedNumQuestions]}
                        onValueChange={(value) => dispatch(setSelectedNumQuestions(value[0]))}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                    />
                    <div className="flex justify-end text-xs text-muted-foreground">
                        <span>{selectedNumQuestions} questions</span>
                    </div>
                </div>
                <div className='space-x-4'>
                    <Button disabled={data ? true : false} onClick={handleGenerateQuiz} variant="secondary" className='border'>{isPending ? <>Generating <svg aria-hidden="true" className="w-8 h-8 text-gray-300 animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg></> : <>Generate Quiz <SendHorizontal /></>}</Button>
                    {data && <Button variant="secondary" onClick={handleReset} className='border'>Reset <RotateCcw /></Button> }
                </div>
              {data && <div>
                    <QuizCard
                        questions={data}
                    />
                </div> }
            </div>
        </div>
    )
}

export default QuizPage