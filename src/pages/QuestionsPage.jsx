import React from 'react';
import QuestionTitle from '../components/Question/QuestionTitle';
import Answer from '../components/Question/Answer';
import ProgressBar from '../components/Question/ProgressBar';
import ReturnPage from '../components/ReturnPage';

const QuestionsPage = () => {
  return (
    <section className="pt-24">
      <ReturnPage />
      <ProgressBar />
      <QuestionTitle />
      <Answer />
    </section>
  );
};

export default QuestionsPage;
