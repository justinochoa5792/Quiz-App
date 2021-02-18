import React, { useState, useContext } from "react";
import { QuizContext } from "../helpers/Context";
import { Question } from "../helpers/Question";
import "../App.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Question[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Question[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="quiz">
      <h1>{Question[currentQuestion].prompt}</h1>
      <div className="option">
        <button
          onClick={() => {
            setOptionChosen("optionA");
          }}
        >
          {Question[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setOptionChosen("optionB");
          }}
        >
          {Question[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setOptionChosen("optionC");
          }}
        >
          {Question[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setOptionChosen("optionD");
          }}
        >
          {Question[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion == Question.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
