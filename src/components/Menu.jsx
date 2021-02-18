import React, { useContext } from "react";
import "../App.css";
import { QuizContext } from "../helpers/Context";

const Menu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  );
};

export default Menu;
