import React from "react";
import "../styles/game.css";  // ✅ Ensure styling is loaded

const Feedback = ({ isCorrect }) => {
    return (
        <div className={`feedback-container ${isCorrect ? "correct-feedback" : "wrong-feedback"}`}>
            {isCorrect ? "🎉 Correct!" : "❌ Wrong!"}
        </div>
    );
};

export default Feedback;
