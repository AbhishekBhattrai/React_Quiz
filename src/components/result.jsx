function Result({ score, total, restart }) {
  return (
    <div>
      <h2>Quiz Finished </h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
}

export default Result;
