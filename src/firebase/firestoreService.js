import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // ✅ Ensure this matches your actual Firebase config

const questionsCollection = collection(db, "questions");

// ✅ Fetches a random question from Firebase
export const fetchRandomQuestion = async () => {
    const snapshot = await getDocs(questionsCollection);
    const questions = snapshot.docs.map(doc => doc.data());

    if (questions.length === 0) {
        throw new Error("No questions found in database");
    }

    // ✅ Pick a random question
    return questions[Math.floor(Math.random() * questions.length)];
};

// ✅ Fetch leaderboard data
export const getLeaderboard = async () => {
    // Your leaderboard fetching logic
};
