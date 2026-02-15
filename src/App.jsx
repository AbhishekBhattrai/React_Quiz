import { useState } from "react";
import allQuestions from "./data/questions";
import Question from "./components/question";
import Result from "./components/result";
import "./App.css";

function getRandomQuestions(arr, num) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, num);
}

function App() {

  const [questions] = useState(() => getRandomQuestions(allQuestions, 20));

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setCurrent(current + 1);
  };

  const restartQuiz = () => {
    window.location.reload(); 
  };

return (
  <div className="app">
    <div className="card">
      <h1>React Quiz App</h1>

      {current < questions.length ? (
        <Question data={questions[current]} onAnswer={handleAnswer} />
      ) : (
        <Result score={score} total={questions.length} restart={restartQuiz} />
      )}
    </div>
  </div>
);

}

export default App;
