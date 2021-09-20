import React, { useReducer } from 'react';
import quiz from '../../quiz';
import QuizContext from './QuizContext';
import QuizReducer from './QuizReducer';
function QuizState(props) {
  const initialState = quiz;
  const [state, dispatch] = useReducer(QuizReducer, initialState);

  const finalScore = (temp, id) => {
    dispatch({ type: 'FINAL_SCORE', payload: { temp, id } });
    console.log(temp, id);
  };

  return (
    <QuizContext.Provider value={{ state, finalScore }}>
      {props.children}
    </QuizContext.Provider>
  );
}

export default QuizState;
