import { useState } from 'react';

const Listening = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [confirmed, setConfirmed] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([
        {
            audio: "sample-audio.mp3",
            text: "What is the main topic of the conversation?",
            options: ["Weather", "Technology", "Sports", "Travel"],
            correct: 1
        },
        {
            audio: "sample-audio-2.mp3",
            text: "What is the speaker's opinion on remote work?",
            options: ["Positive", "Negative", "Neutral", "Uncertain"],
            correct: 0
        }
    ]);

    const [newQuestion, setNewQuestion] = useState({ audio: "", text: "", options: ["", "", "", ""], correct: 0 });
    const [showAddForm, setShowAddForm] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editQuestion, setEditQuestion] = useState({ audio: "", text: "", options: ["", "", "", ""], correct: 0 });
    const [showEditForm, setShowEditForm] = useState(false);

    const handleAnswerChange = (index: number) => {
        if (!confirmed) {
            setSelectedAnswer(index);
        }
    };

    const confirmAnswer = () => {
        setConfirmed(true);
    };

    const nextQuestion = () => {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedAnswer(null);
            setConfirmed(false);
        }
    };

    const handleNewQuestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, optionIndex?: number) => {
        const { name, value } = e.target;
        if (optionIndex !== undefined) {
            const newOptions = [...newQuestion.options];
            newOptions[optionIndex] = value;
            setNewQuestion({ ...newQuestion, options: newOptions });
        } else {
            setNewQuestion({ ...newQuestion, [name]: value });
        }
    };

    const addNewQuestion = () => {
        setQuestions([...questions, newQuestion]);
        setNewQuestion({ audio: "", text: "", options: ["", "", "", ""], correct: 0 });
        setShowAddForm(false);
    };

    const editQuestionDetails = (index: number) => {
        setEditIndex(index);
        setEditQuestion(questions[index]);
        setShowEditForm(true);
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, optionIndex?: number) => {
        const { name, value } = e.target;
        if (optionIndex !== undefined) {
            const newOptions = [...editQuestion.options];
            newOptions[optionIndex] = value;
            setEditQuestion({ ...editQuestion, options: newOptions });
        } else {
            setEditQuestion({ ...editQuestion, [name]: value });
        }
    };

    const saveEdit = () => {
        if (editIndex !== null) {
            const newQuestions = [...questions];
            newQuestions[editIndex] = editQuestion;
            setQuestions(newQuestions);
            setEditIndex(null);
            setEditQuestion({ audio: "", text: "", options: ["", "", "", ""], correct: 0 });
            setShowEditForm(false);
        }
    };

    const deleteQuestion = (index: number) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    return (
        <div className="p-6 flex flex-col items-center min-h-screen bg-gray-50 relative">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">🎧 Listening Practice</h1>
            <p className="text-gray-700 text-base mb-6">Listen to the audio and select the correct answer.</p>

            <button onClick={() => setShowAddForm(true)} className="mb-6 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">Add New Question</button>

            <div className="w-full max-w-md space-y-4">
                {questions.map((question, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold">{question.text}</p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => editQuestionDetails(index)}
                                    className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteQuestion(index)}
                                    className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <audio src={question.audio} controls className="w-full mt-2" />
                        <div className="mt-4 space-y-2">
                            {question.options.map((option, optionIndex) => (
                                <label
                                    key={optionIndex}
                                    className={`flex items-center gap-3 cursor-pointer transition px-4 py-3 rounded-lg text-lg font-medium ${selectedAnswer === optionIndex ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={`answer-${index}`}
                                        value={optionIndex}
                                        checked={selectedAnswer === optionIndex}
                                        onChange={() => handleAnswerChange(optionIndex)}
                                        disabled={confirmed}
                                        className="w-5 h-5 text-blue-600 focus:ring-blue-500 hidden"
                                    />
                                    <span className={`${confirmed ? (optionIndex === question.correct ? 'text-green-600' : 'text-red-600') : 'text-gray-900'}`}>
                                        {option}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {confirmed && (
                <p className="mt-6 text-lg font-semibold">
                    {selectedAnswer === questions[questionIndex].correct
                        ? <span className="text-green-600">✅ Correct! Well done.</span>
                        : <span className="text-red-600">❌ Incorrect. Try again next time!</span>
                    }
                </p>
            )}

            <div className="fixed bottom-6 right-6 flex gap-6">
                <button
                    onClick={confirmAnswer}
                    className="py-3 px-6 rounded-full text-lg font-medium bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 transition shadow-lg"
                    disabled={confirmed || selectedAnswer === null}
                >
                    Confirm Answer
                </button>
                {confirmed && questionIndex < questions.length - 1 && (
                    <button
                        onClick={nextQuestion}
                        className="py-3 px-6 rounded-full text-lg font-medium bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 transition shadow-lg"
                    >
                        Next Question
                    </button>
                )}
            </div>

            {showAddForm && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Question</h2>
                        <input
                            type="text"
                            name="audio"
                            value={newQuestion.audio}
                            onChange={(e) => handleNewQuestionChange(e)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Audio URL"
                        />
                        <textarea
                            name="text"
                            value={newQuestion.text}
                            onChange={(e) => handleNewQuestionChange(e)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Question Text"
                        />
                        {newQuestion.options.map((option, optionIndex) => (
                            <input
                                key={optionIndex}
                                type="text"
                                value={option}
                                onChange={(e) => handleNewQuestionChange(e, optionIndex)}
                                className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                                placeholder={`Option ${optionIndex + 1}`}
                            />
                        ))}
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setShowAddForm(false)} className="py-2 px-6 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">Cancel</button>
                            <button onClick={addNewQuestion} className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Add</button>
                        </div>
                    </div>
                </div>
            )}

            {showEditForm && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Question</h2>
                        <input
                            type="text"
                            name="audio"
                            value={editQuestion.audio}
                            onChange={(e) => handleEditChange(e)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Audio URL"
                        />
                        <textarea
                            name="text"
                            value={editQuestion.text}
                            onChange={(e) => handleEditChange(e)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Question Text"
                        />
                        {editQuestion.options.map((option, optionIndex) => (
                            <input
                                key={optionIndex}
                                type="text"
                                value={option}
                                onChange={(e) => handleEditChange(e, optionIndex)}
                                className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                                placeholder={`Option ${optionIndex + 1}`}
                            />
                        ))}
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setShowEditForm(false)} className="py-2 px-6 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">Cancel</button>
                            <button onClick={saveEdit} className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Listening;