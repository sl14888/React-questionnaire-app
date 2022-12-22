import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionItems } from '../../helpers/QuestionItems';
import { addSelectedSrc } from '../../slices/QuestionSlice';

const Result = () => {
  const selectedQuestions = useSelector((state) => state.question.selectedQuestions);
  // const stepQuestion = useSelector((state) => state.question.stepQuestion);
  // const question = QuestionItems[stepQuestion];
  const dispatch = useDispatch();

  // const [show, setShow] = React.useState(false);

  let testArray = [];

  return (
    <div className="grid h-full justify-items-center pt-10">
      <p className=" h-12 font-medium text-xl">Ответы на вопросы:</p>
      {/* <button
        onClick={() => setShow(!show)}
        className="w-52 h-12 bg-green-400 transition duration-500 cursor-pointer rounded-lg focus:ring-2  hover:bg-green-700 focus:ring-opacity-50 ring-inset"
      >
        Показать результат
      </button> */}
      {selectedQuestions.map((result, index) => {
        return (
          <div className="flex pt-2" key={index}>
            <div className="text-xl font-medium">{result.title}:</div>
            <div className="flex">
              <p className="text-xl pl-2 px-3"> {result.variant}</p>
              {selectedQuestions[index].select.map((selectItem, selectIndex) => (
                <p className=" text-lg px-1" key={selectIndex}>
                  {selectItem}
                </p>
              ))}
            </div>
            {selectedQuestions[index].id.map((icon, iconIndex) => {
              const srcImg = QuestionItems[index].iconOptions[icon];
              testArray.push(srcImg);
              dispatch(addSelectedSrc(srcImg));
              // return (
              //   <img
              //     key={iconIndex}
              //     src={process.env.PUBLIC_URL + `${srcImg}`}
              //     alt=""
              //     width={20}
              //   ></img>
              // );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Result;
