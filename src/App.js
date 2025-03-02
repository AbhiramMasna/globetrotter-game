import React, { useState } from "react";
import Question from "./components/Question";
import Scoreboard from "./components/Scoreboard";
import ShareInvite from "./components/ShareInvite";

const App = () => {
  const [score, setScore] = useState(0);

  const updateScore = (isCorrect) => {
    setScore(prevScore => (isCorrect ? prevScore + 1 : prevScore));
  };

  return (
    <div>
      <Scoreboard score={score} />
      <Question updateScore={updateScore} />
      <ShareInvite score={score} />
    </div>
  );
};

export default App;
