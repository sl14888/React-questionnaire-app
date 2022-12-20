import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll } from '../slices/QuestionSlice';
import { QuestionItems } from '../helpers/QuestionItems';
import { useNavigate } from 'react-router';
import Result from '../components/FinalResult/Result';
import carpetResult from '../assets/images/carpetResult.jpg';
import ReturnPage from '../components/ReturnPage';
import CanvasImage from '../components/CanvasImage';

const FinalScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.question.selectedQuestions);
  const stepQuestion = useSelector((state) => state.question.stepQuestion);

  React.useEffect(() => {
    console.log(result);
  }, []);

  const onReloadBtn = () => {
    navigate('/question');
    dispatch(clearAll());
  };

  const onReturnBtn = () => {
    navigate('/');
  };

  return (
    <div className="pt-24">
      <div className="grid h-full justify-items-center">
        {stepQuestion !== QuestionItems.length ? (
          <div>
            <ReturnPage />
            <div className="pt-20 text-center font-bold text-6xl tracking-widest">
              Вы не прошли тест!
            </div>
          </div>
        ) : (
          <div className="grid h-full justify-items-center">
            <CanvasImage />
            {/* <img className="w-4/6" src={carpetResult} alt="carpet result" /> */}
            <div className="font-bold text-2xl pt-5">
              Поздравляем с успешным прохождением теста!!!🎉🎉🎉🎉
            </div>
            <Result />
            <p className="font-medium text-xl text-justify py-5 mx-28">
              Используя различные методики можно составить психологический портрет
              личности человека, даже не зная его. Такие портреты личности часто
              используют при приеме на работу, даже в брачных агенствах для подбора пары.
              Исследуются обычно: личностная сфера — особенности характера,
              коммуникативная сфера, интеллектуальная. Анализируются склонности к той или
              иной деятельности, виды мотивации и т.д. На основе полученных данных можно
              сделать общее заключение о человеке и дать определенные рекомендации.
            </p>
            <div className="flex my-5">
              <div className="mr-5">
                <button
                  className="w-52 h-12 bg-green-400 transition duration-500 cursor-pointer rounded-lg focus:ring-2  hover:bg-green-700 focus:ring-opacity-50 ring-inset"
                  onClick={() => onReloadBtn()}
                >
                  Начать тест сначала
                </button>
              </div>
              <div>
                <button
                  className="w-52 h-12 bg-green-400 transition duration-500 cursor-pointer rounded-lg focus:ring-2  hover:bg-green-700 focus:ring-opacity-50 ring-inset"
                  onClick={() => onReturnBtn()}
                >
                  Вернуться на главную
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalScreen;
