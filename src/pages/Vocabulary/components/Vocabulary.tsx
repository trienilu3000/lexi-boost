import { useState } from 'react';

const API_URL = "http://localhost:5000/vocabulary";
const Vocabulary = () => {
    const [words, setWords] = useState([
        { word: "Resilient", phonetic: "/rɪˈzɪliənt/", meaning: "Able to recover quickly from difficulties", audio: "resilient.mp3", learned: false },
        { word: "Meticulous", phonetic: "/məˈtɪkjʊləs/", meaning: "Showing great attention to detail", audio: "meticulous.mp3", learned: false },
        { word: "Innovative", phonetic: "/ˈɪnəˌveɪtɪv/", meaning: "Featuring new methods; advanced and original", audio: "innovative.mp3", learned: false }
    ]);

    const [quizIndex, setQuizIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [message, setMessage] = useState("");
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editWord, setEditWord] = useState({ word: "", phonetic: "", meaning: "", audio: "", learned: false });
    const [newWord, setNewWord] = useState({ word: "", phonetic: "", meaning: "", audio: "", learned: false });
    const [showAddForm, setShowAddForm] = useState(false);

    const toggleLearned = (index: number) => {
        const newWords = [...words];
        newWords[index].learned = !newWords[index].learned;
        setWords(newWords);
    };

    const startQuiz = () => {
        setShowQuiz(true);
        setQuizIndex(0);
        setMessage("");
    };

    const checkAnswer = (selectedMeaning: string) => {
        if (selectedMeaning === words[quizIndex].meaning) {
            setMessage("✅ Correct!");
            setTimeout(() => {
                if (quizIndex < words.length - 1) {
                    setQuizIndex(quizIndex + 1);
                    setMessage("");
                } else {
                    setShowQuiz(false);
                }
            }, 1000);
        } else {
            setMessage("❌ Wrong! Try again.");
        }
    };

    const deleteWord = (index: number) => {
        const newWords = words.filter((_, i) => i !== index);
        setWords(newWords);
    };

    const editWordDetails = (index: number) => {
        setEditIndex(index);
        setEditWord(words[index]);
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditWord({ ...editWord, [name]: value });
    };

    const saveEdit = () => {
        if (editIndex !== null) {
            const newWords = [...words];
            newWords[editIndex] = editWord;
            setWords(newWords);
            setEditIndex(null);
            setEditWord({ word: "", phonetic: "", meaning: "", audio: "", learned: false });
        }
    };

    const handleNewWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewWord({ ...newWord, [name]: value });
    };

    const addNewWord = () => {
        setWords([...words, newWord]);
        setNewWord({ word: "", phonetic: "", meaning: "", audio: "", learned: false });
        setShowAddForm(false);
    };

    return (
        <div className="p-8 flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">📖 Vocabulary Builder</h1>
            <p className="text-gray-700 text-lg mb-4">Expand your vocabulary and track your progress.</p>
            {!showQuiz ? (
                <>
                    <button onClick={startQuiz} className="mb-6 py-2 px-6 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition">Start Quiz</button>
                    <button onClick={() => setShowAddForm(true)} className="mb-6 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">Add New Word</button>
                    <div className="w-full max-w-3xl grid gap-6">
                        {words.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white p-5 rounded-xl shadow-lg flex justify-between items-center border-l-8 transition-all ${item.learned ? 'border-green-500' : 'border-blue-500'}`}
                            >
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                        {item.word} <span className="text-gray-500 text-sm">({item.phonetic})</span>
                                        {item.learned && <span className="text-green-500 text-lg ml-2">✔</span>}
                                    </h3>
                                    <p className="text-md text-gray-600 italic mt-1">{item.meaning}</p>
                                    <button onClick={() => console.log(`Play ${item.audio}`)} className="mt-2 text-blue-600 text-2xl hover:text-blue-800 transition">🔊</button>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => toggleLearned(index)}
                                        className={`py-2 px-6 rounded-lg text-white font-semibold transition-all ${item.learned ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                                    >
                                        {item.learned ? '✔ Learned' : 'Mark as Learned'}
                                    </button>
                                    <button
                                        onClick={() => editWordDetails(index)}
                                        className="py-2 px-6 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteWord(index)}
                                        className="py-2 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold text-gray-800">Quiz: What does "{words[quizIndex].word}" mean?</h2>
                    <div className="mt-4 grid gap-3">
                        {[...words].sort(() => 0.5 - Math.random()).map((item, idx) => (
                            <button key={idx} onClick={() => checkAnswer(item.meaning)} className="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">{item.meaning}</button>
                        ))}
                    </div>
                    {message && <p className="mt-4 font-semibold text-lg">{message}</p>}
                </div>
            )}

            {editIndex !== null && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Word</h2>
                        <input
                            type="text"
                            name="word"
                            value={editWord.word}
                            onChange={handleEditChange}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Word"
                        />
                        <input
                            type="text"
                            name="phonetic"
                            value={editWord.phonetic}
                            onChange={handleEditChange}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Phonetic"
                        />
                        <input
                            type="text"
                            name="meaning"
                            value={editWord.meaning}
                            onChange={handleEditChange}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Meaning"
                        />
                        <input
                            type="text"
                            name="audio"
                            value={editWord.audio}
                            onChange={handleEditChange}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Audio"
                        />
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setEditIndex(null)} className="py-2 px-6 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">Cancel</button>
                            <button onClick={saveEdit} className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Save</button>
                        </div>
                    </div>
                </div>
            )}

            {showAddForm && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Word</h2>
                        <input
                            type="text"
                            name="word"
                            value={newWord.word}
                            onChange={handleNewWordChange}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Word"
                        />
                        <input
                            type="text"
                            name="phonetic"
                            value={newWord.phonetic}
                            onChange={handleNewWordChange}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Phonetic"
                        />
                        <input
                            type="text"
                            name="meaning"
                            value={newWord.meaning}
                            onChange={handleNewWordChange}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Meaning"
                        />
                        <input
                            type="text"
                            name="audio"
                            value={newWord.audio}
                            onChange={handleNewWordChange}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Audio"
                        />
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setShowAddForm(false)} className="py-2 px-6 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">Cancel</button>
                            <button onClick={addNewWord} className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Add</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Vocabulary; 