import React from "react";
import "../styles.css";

const Scoreboard = ({ score }) => {
    return (
        <div className="scoreboard">
            <h3>Score: {score}</h3>
        </div>
    );
};

export default Scoreboard;
