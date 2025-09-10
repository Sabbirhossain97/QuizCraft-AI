import { Card, CardContent } from '@/components/ui/card';
import { QuizQuestion } from '../interfaces/interfaces';
import { Button } from '@/components/ui/button';

interface QuizListProps {
    questions: QuizQuestion[]
}

const QuizCard: React.FC<QuizListProps> = ({ questions }) => {
    return (
        <Card className="quiz-card shadow-card border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
                <div className="py-6">
                    <div className="space-y-8">
                        {questions.map((question, index) => {
                            // const isSelected = selectedAnswer === index;
                            // const optionLabel = String.fromCharCode(65 + index); // A, B, C, D

                            return (
                                <div key={index} className='border rounded-md'>
                                    <div className="flex w-full flex-col items-start space-x-4">
                                        <div className="gradient-primary p-6 flex items-center font-semibold">
                                            <div className="bg-gray-200 px-3 rounded-lg  py-1 text-xl">
                                                Q{index+1}
                                            </div>
                                            <div className="flex-1 ml-2">
                                                <h3 className="text-xl leading-relaxed">
                                                    {question.question}
                                                </h3>
                                            </div>
                                        </div>
                                        <ul className='w-full space-y-4 p-6'>
                                            {question.options.map((option, index) => (
                                                <li className='border rounded-md w-full py-6 px-4' key={index}>{option}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default QuizCard