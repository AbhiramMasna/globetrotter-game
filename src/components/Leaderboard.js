import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../firebase/firestoreService";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const data = await getLeaderboard();
      setLeaders(data);
    };
    fetchLeaders();
  }, []);

  return (
    <div className="game-container">
      <h2>🏆 Leaderboard</h2>
      <ul>
        {leaders.map((player, index) => (
          <li key={index}>
            {index + 1}. {player.username} - {player.score} pts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
