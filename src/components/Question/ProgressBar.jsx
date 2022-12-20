import React from 'react';
import { useSelector } from 'react-redux';
import { QuestionItems } from '../../helpers/QuestionItems';

const ProgressBar = () => {
  const stepQuestion = useSelector((state) => state.question.stepQuestion);
  const percentage = Math.round((stepQuestion / QuestionItems.length) * 100);
  return (
    <>
      <div className="tracking-widest font-bold text-xl pb-3">
        {stepQuestion}/{QuestionItems.length}
      </div>
      <div className="h-3 rounded-full bg-blue-gray-100 mb-6">
        <div
          className="h-full rounded-full w-4/5 bg-green-400 transition-all ease-in-out duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
