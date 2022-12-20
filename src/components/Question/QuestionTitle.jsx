import React from 'react';
import { QuestionItems } from '../../helpers/QuestionItems';
import { useSelector } from 'react-redux';

const QuestionTitle = () => {
  const stepQuestion = useSelector((state) => state.question.stepQuestion);

  return <h1>{QuestionItems[stepQuestion].title}</h1>;
};

export default QuestionTitle;
