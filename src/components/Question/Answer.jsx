import React from 'react';
import { QuestionItems } from '../../helpers/QuestionItems';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSelectedQuestion,
  incrementStepQuestion,
  decrementStepQuestion,
} from '../../slices/QuestionSlice';
import { useNavigate } from 'react-router';
import AlertMessage from '../AlertMessage';
import SingleChoices from './SingleChoices';
import MultipleChoices from './MultipleChoices';
import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

const Answer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stepQuestion = useSelector((state) => state.question.stepQuestion);
  const question = QuestionItems[stepQuestion];

  const [activeVariant, setActiveVariant] = React.useState(null);
  const [activeVariantId, setActiveVariantId] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [checkedSelect, setCheckedSelect] = React.useState([]);

  const onClickVariant = (variant, id) => {
    setActiveVariant(variant);
    setActiveVariantId([id]);
    setShowAlert(false);
  };

  const onChangeChecked = (select) => {
    const { value, checked, id } = select.target;

    if (checked) {
      setActiveVariantId((prev) => [...prev, +value]);
      setCheckedSelect((prev) => [...prev, id]);
    } else {
      setActiveVariantId((prev) => prev.filter((item) => item !== value));
      setCheckedSelect((prev) => prev.filter((item) => item !== id));
    }
  };
  // console.log(activeVariantId);

  const onClickBtnNext = () => {
    if (activeVariant !== null) {
      if (stepQuestion === QuestionItems.length - 1) {
        navigate('/final');
      }

      dispatch(
        addSelectedQuestion({
          title: QuestionItems[stepQuestion].title,
          variant: activeVariant,
          select: checkedSelect,
          id: activeVariantId,
        })
      );

      dispatch(incrementStepQuestion());

      setActiveVariant(null);
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
    setCheckedSelect([]);
    setActiveVariantId([]);
  };

  const onClickBtnPrev = () => {
    dispatch(decrementStepQuestion());
  };

  return (
    <>
      <AlertMessage
        color="red"
        text="Выбирите вариант ответа"
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      <SingleChoices activeVariant={activeVariant} onClickVariant={onClickVariant} />
      <MultipleChoices activeVariant={activeVariant} onChangeChecked={onChangeChecked} />
      <div className="flex">
        {stepQuestion !== 0 && (
          <div>
            <button
              className="w-50 h-12 bg-green-400 transition duration-500 my-5 mr-5 px-5 cursor-pointer text-lg rounded-lg focus:outline-none  hover:bg-green-700 focus:ring-opacity-50 ring-inset"
              onClick={() => onClickBtnPrev()}
            >
              <img src={arrowLeft} alt="arrow-left" />
            </button>
          </div>
        )}
        <button
          className="w-50 h-12 bg-green-400 transition duration-500 my-5 px-5 cursor-pointer text-lg rounded-lg focus:outline-none   hover:bg-green-700 focus:ring-opacity-50 ring-inset"
          onClick={() => onClickBtnNext()}
        >
          <img src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </>
  );
};

export default Answer;
