import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings, GraduationCap, ChevronDown, PanelRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux'
import { setTopic, setSubtopic, setDifficulty, setLanguage } from "@/redux/slices/preferenceSlice";

interface Topics {
    name: string;
    subtopics: string[]
}

const topics: Topics[] = [
    {
        name: "Mathematics",
        subtopics: [
            "Algebra",
            "Geometry",
            "Trigonometry",
            "Calculus",
            "Probability & Statistics",
            "Number Theory"
        ]
    },
    {
        name: "Science",
        subtopics: [
            "Physics",
            "Chemistry",
            "Biology",
            "Earth Science",
            "Astronomy",
            "Environmental Science"
        ]
    },
    {
        name: "History",
        subtopics: [
            "Ancient History",
            "Medieval History",
            "Modern History",
            "World Wars",
            "Cultural History",
            "National History"
        ]
    },
    {
        name: "Geography",
        subtopics: [
            "Physical Geography",
            "Human Geography",
            "Maps & Cartography",
            "Climate & Environment",
            "Countries & Capitals"
        ]
    },
    {
        name: "Literature",
        subtopics: [
            "World Literature",
            "Poetry",
            "Novels & Short Stories",
            "Drama & Theatre",
            "Authors & Literary Devices"
        ]
    },
    {
        name: "Computer Science",
        subtopics: [
            "Programming",
            "Data Structures & Algorithms",
            "Databases",
            "Operating Systems",
            "Networking",
            "AI & Machine Learning"
        ]
    },
    {
        name: "Economics & Business",
        subtopics: [
            "Microeconomics",
            "Macroeconomics",
            "Finance & Banking",
            "Entrepreneurship",
            "Marketing & Management"
        ]
    },
    {
        name: "Philosophy & Psychology",
        subtopics: [
            "Logic & Reasoning",
            "Ethics",
            "Classical Philosophers",
            "Modern Philosophy",
            "Cognitive Psychology",
            "Social Psychology"
        ]
    },
    {
        name: "Sociology & Politics",
        subtopics: [
            "Political Systems",
            "Civics & Government",
            "Social Movements",
            "International Relations",
            "Law & Human Rights"
        ]
    },
    {
        name: "Art & Culture",
        subtopics: [
            "Visual Arts",
            "Music",
            "Performing Arts",
            "Film & Media",
            "World Cultures",
            "Mythology & Religion"
        ]
    },
    {
        name: "Sports",
        subtopics: [
            "Football (Soccer)",
            "Cricket",
            "Basketball",
            "Olympic Sports",
            "Famous Athletes"
        ]
    },
    {
        name: "Health & Medicine",
        subtopics: [
            "Human Anatomy",
            "Diseases & Treatments",
            "Nutrition",
            "Public Health",
            "Medical Discoveries"
        ]
    },
    {
        name: "Technology & Innovation",
        subtopics: [
            "Modern Inventions",
            "Robotics",
            "Space Technology",
            "Cybersecurity",
            "Future Tech"
        ]
    },
    {
        name: "General Knowledge & Current Affairs",
        subtopics: [
            "World Events",
            "Famous Personalities",
            "International Organizations",
            "Law & Ethics",
            "Trivia & Fun Facts"
        ]
    }
];


const levels = [
    'Standard',
    'Moderate',
    'Hard',
];

const languages = [
    'English',
    'Bengali',
];


function Sidebar() {
    const dispatch = useDispatch();
    const { selectedTopic, selectedSubtopic, selectedLanguage, selectedDifficulty } = useSelector((state: any) => state.preferences)
    const selectedTopicObject = topics.find(t => t.name === selectedTopic);

    return (
        <div className='w-92 bg-white border-r border-zinc-200 '>
            <div className='h-24 border-b px-6 relative flex gap-2 items-center text-2xl'>
                <GraduationCap className='h-8 w-8' />
                <span className='font-semibold'>QuizCraft AI</span>
                <PanelRight className='absolute right-4 h-5 w-5' />
            </div>
            <div className='px-6 pt-10'>
                <div className='flex flex-col'>
                    <h1 className='flex items-center gap-2 text-lg pb-4 font-semibold'><Settings className='text-[10px]' /> Preferences</h1>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="w-full border text-left bg-gray-100">
                            <Button variant="outline" className="text-left relative">
                                {selectedTopic}
                                <ChevronDown className="absolute right-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {topics.map((topic, i) => (
                                <DropdownMenuItem
                                    className="px-8 py-3 text-sm hover:bg-primary hover:text-white"
                                    key={i}
                                    onClick={() => dispatch(setTopic(topic.name))}
                                >
                                    {topic.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <label className="text-sm pb-2 font-medium mt-6">Subtopic</label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="w-full border text-left bg-gray-100">
                            <Button variant="outline" className="text-left relative">
                                {selectedSubtopic || "Select Subtopic"}
                                <ChevronDown className="absolute right-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {selectedTopicObject?.subtopics.map((sub, i) => (
                                <DropdownMenuItem
                                    className="px-8 py-3 text-sm hover:bg-primary hover:text-white"
                                    key={i}
                                    onClick={() => dispatch(setSubtopic(sub))}
                                >
                                    {sub}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <label className="text-sm pb-2 font-medium mt-6">Difficulty</label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className='w-full border text-left bg-gray-100'>
                            <Button variant="outline" className='text-left relative'>
                                {selectedDifficulty}
                                <ChevronDown className='absolute right-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {levels.map((level, i) => (
                                <DropdownMenuItem className="px-8 py-3 text-sm hover:bg-primary hover:text-white" key={i} onClick={() => dispatch(setDifficulty(level))}>
                                    {level}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <label className="text-sm pb-2 font-medium mt-6">Language</label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className='w-full border text-left bg-gray-100'>
                            <Button variant="outline" className='text-left relative'>
                                {selectedLanguage}
                                <ChevronDown className='absolute right-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {languages.map((language, i) => (
                                <DropdownMenuItem className="px-8 py-3 text-sm hover:bg-primary hover:text-white" key={i} onClick={() => dispatch(setLanguage(language))}>
                                    {language}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default Sidebar