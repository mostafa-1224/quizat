import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import QuizContext from '../context/QuizConext/QuizContext';

function HomeComponent() {
  const quizesContext = useContext(QuizContext);
  const { state } = quizesContext;
  console.log(state);
  return (
    <div className='home'>
      <h1>Welcome to our quiz website</h1>
      {state.map((quiz, index) => {
        return (
          <Link to={`/${index}`} style={{ textDecoration: 'none' }}>
            <div className='quiz'>
              <h1>{quiz.title}</h1>
              <h3>{quiz.description}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HomeComponent;
