import React, { useState, useEffect } from "react";
import { fetchRandomQuestion } from "../firebase/firestoreService";
import Feedback from "./Feedback";
import Scoreboard from "./Scoreboard"; // Import Scoreboard component
import "../styles.css"; // Ensure styles are included

const Question = () => {
    const [questionData, setQuestionData] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0); // Track score

    // Fetch a new question when the component loads
    useEffect(() => {
        fetchNewQuestion();
    }, []);

    // Function to fetch a new question
    const fetchNewQuestion = async () => {
        const newQuestion = await fetchRandomQuestion();
        setQuestionData(newQuestion);
    };

    // Handle user's answer selection
    const handleAnswer = (selectedAnswer) => {
        if (!questionData) return;

        const isCorrectAnswer = selectedAnswer === questionData.city;
        setShowFeedback(true);
        setIsCorrect(isCorrectAnswer);

        // If correct, increase the score
        if (isCorrectAnswer) {
            setScore(prevScore => prevScore + 1);
        }

        // Delay before moving to the next question
        setTimeout(() => {
            setShowFeedback(false);
            setIsCorrect(null);
            fetchNewQuestion(); // Load next question
        }, 2000);
    };

    if (!questionData) {
        return <div className="loading">Loading question...</div>;
    }

    return (
        <div className="question-container">
            <h2 className="question-title">Guess the City! 🌍</h2>
            <Scoreboard score={score} /> {/* Display the Scoreboard */}
            <p className="question-clue">{questionData.clues[0]}</p>
            
            <div className="options">
                {[questionData.city, "London", "Berlin", "Sydney"]
                    .sort(() => Math.random() - 0.5)
                    .map((option, index) => (
                        <button 
                            key={index} 
                            className="option-button" 
                            onClick={() => handleAnswer(option)}
                        >
                            {option}
                        </button>
                    ))}
            </div>

            {showFeedback && <Feedback isCorrect={isCorrect} />}
        </div>
    );
};

export default Question;
