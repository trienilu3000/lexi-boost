import { useState } from 'react';

const Grammar = () => {
    const [grammarTopics, setGrammarTopics] = useState([
        {
            title: "Present Simple",
            description: "The Present Simple tense is used to describe habits, general truths, and repeated actions.",
            structure: "Subject + Verb(s) + Object",
            usage: ["Habits: I go to school every day.", "General truths: The sun rises in the east."],
            examples: ["She speaks English fluently.", "The store opens at 9 AM."],
            quiz: [
                { question: "Which sentence is in Present Simple?", options: ["I am going.", "She speaks French.", "They were happy."], answer: "She speaks French." }
            ]
        }
    ]);

    const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [newQuiz, setNewQuiz] = useState({ question: '', options: ['', '', ''], answer: '' });

    const [newGrammar, setNewGrammar] = useState({
        title: '',
        description: '',
        structure: '',
        usage: [] as string[],
        examples: [] as string[],
        quiz: [] as { question: string, options: string[], answer: string }[]
    });

    // Xử lý thay đổi input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewGrammar(prev => ({
            ...prev,
            [name]: (name === "usage" || name === "examples") ? value.split(",").map(item => item.trim()) : value
        }));
    };

    // Lưu Grammar
    const handleSave = () => {
        if (!newGrammar.title || !newGrammar.description) {
            alert("Please fill in all required fields!");
            return;
        }

        setGrammarTopics(prev =>
            editIndex !== null
                ? prev.map((g, i) => i === editIndex ? { ...newGrammar } : g)
                : [...prev, { ...newGrammar }]
        );

        resetForm();
    };

    // Reset form
    const resetForm = () => {
        setNewGrammar({ title: '', description: '', structure: '', usage: [], examples: [], quiz: [] });
        setEditIndex(null);
        setShowDialog(false);
    };

    // Chỉnh sửa Grammar
    const handleEdit = (index: number) => {
        setEditIndex(index);
        setNewGrammar(grammarTopics[index]);
        setShowDialog(true);
    };

    // Xóa Grammar
    const handleDelete = (index: number) => {
        if (confirm("Are you sure you want to delete this grammar?")) {
            setGrammarTopics(prev => prev.filter((_, i) => i !== index));
        }
    };

    // Toggle quiz
    const handleQuizSelect = (index: number) => {
        setSelectedQuiz(selectedQuiz === index ? null : index);
    };

    // Thêm Quiz
    const handleAddQuiz = () => {
        if (!newQuiz.question || !newQuiz.answer || newQuiz.options.some(opt => !opt)) {
            alert("Please complete all quiz fields!");
            return;
        }

        setNewGrammar(prev => ({
            ...prev,
            quiz: [...prev.quiz, newQuiz]
        }));

        setNewQuiz({ question: '', options: ['', '', ''], answer: '' });
    };

    // Xóa Quiz
    const handleDeleteQuiz = (quizIndex: number) => {
        setNewGrammar(prev => ({
            ...prev,
            quiz: prev.quiz.filter((_, i) => i !== quizIndex)
        }));
    };

    return (
        <div className="p-8 flex flex-col items-center bg-gray-200 min-h-screen">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-3xl font-extrabold text-gray-900">📘 Grammar Guide</h1>
                <button onClick={() => setShowDialog(true)} className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
                    + Add Grammar
                </button>
            </div>

            {grammarTopics.map((topic, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">{topic.title}</h2>
                    <p className="mt-2 text-gray-700">{topic.description}</p>
                    <h3 className="mt-4 font-semibold">Structure:</h3>
                    <p className="text-gray-600 italic">{topic.structure}</p>
                    <h3 className="mt-4 font-semibold">Usage:</h3>
                    <ul className="list-disc pl-6 text-gray-700">
                        {topic.usage.map((use, i) => <li key={i}>{use}</li>)}
                    </ul>

                    <div className="mt-4 flex gap-2">
                        <button onClick={() => handleEdit(index)} className="py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all">
                            Edit
                        </button>
                        <button onClick={() => handleDelete(index)} className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
                            Delete
                        </button>
                        <button onClick={() => handleQuizSelect(index)} className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                            {selectedQuiz === index ? "Hide Quiz" : "Take Quiz"}
                        </button>
                    </div>

                    {selectedQuiz === index && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                            {topic.quiz.map((q, i) => (
                                <div key={i} className="mb-4">
                                    <p className="font-semibold text-gray-800">{q.question}</p>
                                    {q.options.map((option, j) => (
                                        <label key={j} className="block mt-2 text-gray-700">
                                            <input type="radio" name={`question-${i}`} className="mr-2" />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {showDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">{editIndex !== null ? "Edit Grammar" : "Add New Grammar"}</h2>
                        <input name="title" value={newGrammar.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded mb-4" />
                        <textarea name="description" value={newGrammar.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded mb-4"></textarea>

                        <h3 className="font-semibold mb-2">Add Quiz</h3>
                        <input value={newQuiz.question} onChange={(e) => setNewQuiz({ ...newQuiz, question: e.target.value })} placeholder="Question" className="w-full p-2 border rounded mb-2" />
                        {newQuiz.options.map((opt, i) => (
                            <input key={i} value={opt} onChange={(e) => {
                                const newOptions = [...newQuiz.options];
                                newOptions[i] = e.target.value;
                                setNewQuiz({ ...newQuiz, options: newOptions });
                            }} placeholder={`Option ${i + 1}`} className="w-full p-2 border rounded mb-2" />
                        ))}
                        <input value={newQuiz.answer} onChange={(e) => setNewQuiz({ ...newQuiz, answer: e.target.value })} placeholder="Correct Answer" className="w-full p-2 border rounded mb-2" />
                        <button onClick={handleAddQuiz} className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Quiz</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Grammar;
