import React, { useState } from "react";
import fetchHintFromAI from "../ai/aiHintSystem";

const HintButton = ({ city }) => {
    const [hint, setHint] = useState("");

    const getHint = async () => {
        const aiHint = await fetchHintFromAI(city);
        setHint(aiHint);
    };

    return (
        <div>
            <button onClick={getHint} className="hint-button">Get Hint</button>
            {hint && <p className="hint-text">💡 Hint: {hint}</p>}
        </div>
    );
};

export default HintButton;
