import React from 'react';
import QuestionsIndexContainer from './questions_index_container';

export const AnswerItem = (props) => {
  return (
    <div className='answer-item'>
      <h2 className='question'>{props.question[0].question_text}</h2>
      <ul className='answer-list'>
        <li className='answer-text'>{props.question[0].answer_one_text}</li>
        <li className='answer-text'>{props.question[0].answer_two_text}</li>
        <li className='answer-text'>{props.question[0].answer_three_text}</li>
        <li className='answer-text'>{props.question[0].answer_four_text}</li>
      </ul>
    </div>
  );
};
