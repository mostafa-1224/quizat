import React, { useState, useContext } from 'react';
import QuizContext from '../context/QuizConext/QuizContext';

function QuestionComponent({ ans, id }) {
  const quizesContext = useContext(QuizContext);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const answerHandler = (e) => {
    const value = e.target.value === 'true' ? true : false;
    setAnswers({ ...answers, [e.target.name]: value });
  };
  const scoreCalculator = () => {
    setScore(0);
    let temp = 0;
    ans.answers.map((answer) => {
      if (answer.is_true === answers[answer.id]) temp++;
      else console.log(false);
    });
    setScore(temp);
    quizesContext.finalScore(temp, id);
  };
  return (
    <div className='question'>
      <h1>{ans.text}</h1>
      {ans.answers.map((answer) => (
        <form>
          <label>true</label>
          <input
            type='radio'
            name={answer.id}
            value='true'
            onChange={answerHandler}
          />
          <label>false</label>
          <input
            type='radio'
            name={answer.id}
            value='false'
            onChange={answerHandler}
          />
        </form>
      ))}
      <button onClick={scoreCalculator}>Submit your answer</button>
      {score !== null ? <h1>Your Score Is = {score}</h1> : ''}
    </div>
  );
}

export default QuestionComponent;
