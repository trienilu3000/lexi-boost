import { useState } from 'react';

const Reading = () => {
    const [passages, setPassages] = useState([
        {
            text: "In today’s digital era, the rapid evolution of technology has revolutionized the way we communicate. Social media platforms, instant messaging, and video conferencing have made it easier than ever to connect with people across the globe, yet this convenience also raises concerns about privacy and the quality of personal interactions.",
            questions: [
                {
                    question: "What is the main idea of the passage?",
                    options: [
                        "Technology has improved communication significantly.",
                        "Social media platforms harm personal interactions.",
                        "Privacy concerns have decreased with technology.",
                        "Digital tools have made communication obsolete."
                    ],
                    correct: 0
                },
                {
                    question: "What concern does the passage raise?",
                    options: [
                        "The convenience of digital communication.",
                        "The quality of personal interactions.",
                        "The speed of technological evolution.",
                        "The effectiveness of video conferencing."
                    ],
                    correct: 1
                }
            ]
        },
        {
            text: "Environmental issues have become a major concern in the 21st century. Rising global temperatures, melting ice caps, and frequent natural disasters are clear signs that our planet is undergoing drastic changes. Governments and individuals alike are seeking ways to reduce carbon emissions and promote sustainable living.",
            questions: [
                {
                    question: "What does the passage primarily discuss?",
                    options: [
                        "The benefits of global warming.",
                        "Measures for sustainable living.",
                        "Major environmental challenges of the modern era.",
                        "Economic growth in the 21st century."
                    ],
                    correct: 2
                },
                {
                    question: "Which of the following is NOT mentioned as an effect in the passage?",
                    options: [
                        "Rising global temperatures.",
                        "Melting ice caps.",
                        "Frequent natural disasters.",
                        "Increased industrial production."
                    ],
                    correct: 3
                }
            ]
        }
    ]);

    const [passageIndex, setPassageIndex] = useState(0);
    const currentPassage = passages[passageIndex];

    const [answers, setAnswers] = useState<(number | null)[]>(new Array(currentPassage.questions.length).fill(null));
    const [confirmed, setConfirmed] = useState(false);

    const [newPassage, setNewPassage] = useState({ text: "", questions: [{ question: "", options: ["", "", "", ""], correct: 0 }] });
    const [showAddForm, setShowAddForm] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editPassage, setEditPassage] = useState({ text: "", questions: [{ question: "", options: ["", "", "", ""], correct: 0 }] });
    const [showEditForm, setShowEditForm] = useState(false);

    const handleAnswerChange = (qIndex: number, optionIndex: number) => {
        if (!confirmed) {
            const newAnswers = [...answers];
            newAnswers[qIndex] = optionIndex;
            setAnswers(newAnswers);
        }
    };

    const submitAnswers = () => {
        if (answers.some((a) => a === null)) {
            alert("Please answer all questions before submitting.");
            return;
        }
        setConfirmed(true);
    };

    const nextPassage = () => {
        if (passageIndex < passages.length - 1) {
            setPassageIndex(passageIndex + 1);
            const newQuestions = passages[passageIndex + 1].questions;
            setAnswers(new Array(newQuestions.length).fill(null));
            setConfirmed(false);
        }
    };

    const handleNewPassageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, qIndex?: number, optionIndex?: number) => {
        const { name, value } = e.target;
        if (qIndex !== undefined && optionIndex !== undefined) {
            const newQuestions = [...newPassage.questions];
            newQuestions[qIndex].options[optionIndex] = value;
            setNewPassage({ ...newPassage, questions: newQuestions });
        } else if (qIndex !== undefined) {
            const newQuestions = [...newPassage.questions];
            newQuestions[qIndex] = { ...newQuestions[qIndex], [name]: value };
            setNewPassage({ ...newPassage, questions: newQuestions });
        } else {
            setNewPassage({ ...newPassage, [name]: value });
        }
    };

    const addNewPassage = () => {
        setPassages([...passages, newPassage]);
        setNewPassage({ text: "", questions: [{ question: "", options: ["", "", "", ""], correct: 0 }] });
        setShowAddForm(false);
    };

    const editPassageDetails = (index: number) => {
        setEditIndex(index);
        setEditPassage(passages[index]);
        setShowEditForm(true);
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, qIndex?: number, optionIndex?: number) => {
        const { name, value } = e.target;
        if (qIndex !== undefined && optionIndex !== undefined) {
            const newQuestions = [...editPassage.questions];
            newQuestions[qIndex].options[optionIndex] = value;
            setEditPassage({ ...editPassage, questions: newQuestions });
        } else if (qIndex !== undefined) {
            const newQuestions = [...editPassage.questions];
            newQuestions[qIndex] = { ...newQuestions[qIndex], [name]: value };
            setEditPassage({ ...editPassage, questions: newQuestions });
        } else {
            setEditPassage({ ...editPassage, [name]: value });
        }
    };

    const saveEdit = () => {
        if (editIndex !== null) {
            const newPassages = [...passages];
            newPassages[editIndex] = editPassage;
            setPassages(newPassages);
            setEditIndex(null);
            setEditPassage({ text: "", questions: [{ question: "", options: ["", "", "", ""], correct: 0 }] });
            setShowEditForm(false);
        }
    };

    const deletePassage = (index: number) => {
        const newPassages = passages.filter((_, i) => i !== index);
        setPassages(newPassages);
    };

    return (
        <div className="p-8 flex flex-col items-center min-h-screen bg-white relative">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">📖 Reading Practice</h1>
            <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl">
                Read the passage below and answer the questions that follow.
            </p>

            <button onClick={() => setShowAddForm(true)} className="mb-6 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">Add New Passage</button>

            <div className="w-full max-w-3xl mb-12">
                <p className="prose prose-lg text-gray-800">{currentPassage.text}</p>
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={() => editPassageDetails(passageIndex)}
                        className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => deletePassage(passageIndex)}
                        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className="w-full max-w-3xl space-y-8">
                {currentPassage.questions.map((q, qIndex) => (
                    <div key={qIndex} className="border-t pt-6">
                        <p className="text-xl font-semibold text-gray-800 mb-4">{q.question}</p>
                        <div className="space-y-3">
                            {q.options.map((option, index) => (
                                <label
                                    key={index}
                                    className={`flex items-center gap-4 cursor-pointer transition px-4 py-2 rounded-lg text-lg font-medium ${answers[qIndex] === index ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${qIndex}`}
                                        value={index}
                                        checked={answers[qIndex] === index}
                                        onChange={() => handleAnswerChange(qIndex, index)}
                                        disabled={confirmed}
                                        className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className={`${confirmed ? (index === q.correct ? 'text-green-600' : 'text-red-600') : 'text-gray-800'}`}>
                                        {option}
                                    </span>
                                </label>
                            ))}
                        </div>
                        {confirmed && (
                            <p className="mt-4 text-lg font-bold">
                                {answers[qIndex] === q.correct ? (
                                    <span className="text-green-600">✅ Correct!</span>
                                ) : (
                                    <span className="text-red-600">❌ Incorrect.</span>
                                )}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 w-full max-w-3xl flex justify-end gap-6">
                <button
                    onClick={submitAnswers}
                    className="py-2 px-4 rounded-lg text-lg font-semibold bg-white text-gray-900 border border-gray-400 hover:bg-gray-100 transition shadow-md"
                    disabled={confirmed || answers.some((a) => a === null)}
                >
                    Submit Answers
                </button>
                {confirmed && passageIndex < passages.length - 1 && (
                    <button
                        onClick={nextPassage}
                        className="py-2 px-4 rounded-lg text-lg font-semibold bg-white text-gray-900 border border-gray-400 hover:bg-gray-100 transition shadow-md"
                    >
                        Next Passage
                    </button>
                )}
            </div>

            {showAddForm && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Passage</h2>
                        <textarea
                            name="text"
                            value={newPassage.text}
                            onChange={(e) => handleNewPassageChange(e)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Passage Text"
                        />
                        {newPassage.questions.map((question, qIndex) => (
                            <div key={qIndex} className="mb-4">
                                <input
                                    type="text"
                                    name="question"
                                    value={question.question}
                                    onChange={(e) => handleNewPassageChange(e, qIndex)}
                                    className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
                                    placeholder="Question"
                                />
                                {question.options.map((option, optionIndex) => (
                                    <input
                                        key={optionIndex}
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleNewPassageChange(e, qIndex, optionIndex)}
                                        className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
                                        placeholder={`Option ${optionIndex + 1}`}
                                    />
                                ))}
                            </div>
                        ))}
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setShowAddForm(false)} className="py-2 px-6 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">Cancel</button>
                            <button onClick={addNewPassage} className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Add</button>
                        </div>
                    </div>
                </div>
            )}

            {showEditForm && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Passage</h2>
                        <textarea
                            name="text"
                            value={editPassage.text}
                            onChange={(e) => handleEditChange(e)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Passage Text"
                        />
                        {editPassage.questions.map((question, qIndex) => (
                            <div key={qIndex} className="mb-4">
                                <input
                                    type="text"
                                    name="question"
                                    value={question.question}
                                    onChange={(e) => handleEditChange(e, qIndex)}
                                    className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
                                    placeholder="Question"
                                />
                                {question.options.map((option, optionIndex) => (
                                    <input
                                        key={optionIndex}
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleEditChange(e, qIndex, optionIndex)}
                                        className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
                                        placeholder={`Option ${optionIndex + 1}`}
                                    />
                                ))}
                            </div>
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

export default Reading;