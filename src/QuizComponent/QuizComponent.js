import React, { useContext } from 'react';
import QuizContext from '../context/QuizConext/QuizContext';
import QuestionComponent from '../QuestionComponent/QuestionComponent';

function QuizComponent(props) {
  const quizesContext = useContext(QuizContext);
  const { state } = quizesContext;
  const quiz = state[props.match.params.id];
  return (
    <div className='quiz-page'>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
      <p>Final Result : {quiz.score}</p>
      {quiz.questions_answers.map((ans) => {
        return <QuestionComponent ans={ans} id={props.match.params.id} />;
      })}
    </div>
  );
}

export default QuizComponent;
