import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReturnPage from '../components/ReturnPage';
import { clearAll } from '../slices/QuestionSlice';
import carpet from '../assets/images/carpet.svg';

const EntrancePage = () => {
  const stepQuestion = useSelector((state) => state.question.stepQuestion);
  const dispatch = useDispatch();

  const onRestartBtn = () => {
    dispatch(clearAll());
  };

  return (
    <>
      <section className="pt-24">
        <ReturnPage />
        <div className="grid place-content-center h-full justify-items-center">
          <img className="w-80 transform rotate-90" src={carpet} alt="carpet icon" />
          <h1 className="text-gray-300 text-center text-4xl font-bold pb-12">
            Узнать свой психологический "портрет личности"
          </h1>
          {stepQuestion === 0 ? (
            <div>
              <Link to="/question">
                <button className="w-60 h-16 bg-green-400 transition duration-500 mx-5 px-5 py-5 cursor-pointer font-bold text-lg rounded-lg focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 hover:bg-green-700 focus:ring-opacity-50 ring-inset">
                  Начать тест
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex mr-5">
              <div>
                <Link to="/question">
                  <button className="w-60 h-16 bg-green-400 transition duration-500 mx-5 px-5 py-5 cursor-pointer font-bold text-lg rounded-lg focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 hover:bg-green-700 focus:ring-opacity-50 ring-inset">
                    Продолжить
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/question">
                  <button
                    className="w-60 h-16 bg-green-400 transition duration-500 mx-5 px-5 py-5 cursor-pointer font-bold text-lg rounded-lg focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 hover:bg-green-700 focus:ring-opacity-50 ring-inset"
                    onClick={() => onRestartBtn()}
                  >
                    Начать сначала
                  </button>
                </Link>
              </div>
            </div>
          )}
          <p className="pt-14 w-4/6 text-lg font-medium">
            <span className="bg-gray-700 rounded-md">
              Психологический портрет личности
            </span>
            — это комплексная психологическая характеристика человека, содержащая описание
            его внутреннего склада и возможных поступков в определенных значимых
            обстоятельствах.
          </p>
          <p className="pt-3 pb-20 w-4/6 text-lg font-medium">
            И все‐таки, почему же так важно его знать? Он может определять наши интересы,
            хобби, влиять на постановку целей, даже стиль жизни может зависеть от него.
            Определить свой психологический портрет личности поможет онлайн тест.
          </p>
        </div>
      </section>
    </>
  );
};

export default EntrancePage;
