import { Radio } from '@material-tailwind/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { QuestionItems } from '../../helpers/QuestionItems';

const SingleChoices = ({ activeVariant, onClickVariant }) => {
  const stepQuestion = useSelector((state) => state.question.stepQuestion);
  const question = QuestionItems[stepQuestion];

  return (
    <div className="mt-3">
      {question.variantsOptions.map((variant, index) => {
        return (
          <div
            className={
              activeVariant === variant
                ? 'choise-active flex bg-transporent border transition duration-500 border-green-400 rounded-xl mb-3'
                : 'choise flex border transition duration-500 hover:border-green-400 rounded-xl mb-3 text-white'
            }
            key={variant}
          >
            <Radio
              className="my-1"
              onClick={() => onClickVariant(variant, index)}
              id={variant}
              name="type"
              color="green"
              label={variant}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SingleChoices;
