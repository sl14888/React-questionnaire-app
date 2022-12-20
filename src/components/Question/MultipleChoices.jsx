import { Checkbox } from '@material-tailwind/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { QuestionItems } from '../../helpers/QuestionItems';

const SingleChoices = ({ activeVariant, onChangeChecked }) => {
  const stepQuestion = useSelector((state) => state.question.stepQuestion);
  const question = QuestionItems[stepQuestion];

  return (
    <>
      {activeVariant === 'Да'
        ? question.selectedOptions?.map((select, index) => {
            return (
              <div className="choise mb-1" key={select}>
                <Checkbox
                  onChange={onChangeChecked}
                  value={+index}
                  id={select}
                  label={select}
                  color="green"
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default SingleChoices;
