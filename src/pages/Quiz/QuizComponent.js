import React, { useState } from 'react';
import './QuizComponent.css';

function QuizComponent({ story, onBack }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = story.questions[index];

  const handleAnswer = (option) => {
    if (option === question.answer) {
      setScore(score + 1);
    }

    if (index + 1 < story.questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="quiz-component">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>{story.title} Quiz</h2>

      {finished ? (
        <div>
          <h3>Quiz Completed!</h3>
          <p>Your Score: {score} / {story.questions.length}</p>
        </div>
      ) : (
        <div>
          <h3>{question.question}</h3>
          <ul>
            {question.options.map((option, i) => (
              <li key={i} onClick={() => handleAnswer(option)}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizComponent;
