import { useState } from "react";

const StreakTracker = () => {
    const [streak, setStreak] = useState(0);
    const [completed, setCompleted] = useState({ vocabulary: false, listening: false, reading: false });

    const completeTask = (task: "vocabulary" | "listening" | "reading") => {
        setCompleted(prev => {
            const updated = { ...prev, [task]: true };
            if (updated.vocabulary && updated.listening && updated.reading) {
                setStreak(streak + 1);
                return { vocabulary: false, listening: false, reading: false };
            }
            return updated;
        });
    };

    return (
        <div className="flex gap-2 items-center justify-center p-4 bg-yellow-200 rounded mt-4">
            <h2>Streak: {streak} 🔥</h2>
        </div>
    );
};

export default StreakTracker;
