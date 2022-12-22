import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { QuestionItems } from '../helpers/QuestionItems';
import CanvasImage from '../components/CanvasImage';

const Home = () => {
  const stepQuestion = useSelector((state) => state.question.stepQuestion);

  return (
    <>
      <section className="grid place-content-center h-full justify-items-center">
        <div className="homeBg"></div>
        <div className="container max-w-lg px-4 py-12 mx-auto md:max-w-none md:text-center">
          <div className="text-2xl font-extrabold text-center md:text-5xl lg:text-7xl">
            <div class="animate__animated  animate__fadeInDown md:text-center pb-1 md:pb-5 text-gray-300 block">
              Психологический
            </div>
            <div className="animate__animated  animate__fadeInDown relative md:mt-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-green-500  md:inline-block">
              "портрет личности"
            </div>
          </div>
          <div className="animate__animated  animate__fadeInDown mx-auto mt-5 text-gray-500 md:mt-8 md:max-w-lg text-center lg:text-lg">
            «Кто я?», «Что со мной происходит?» — воспользуйтесь инструментами,
            разберитесь в себе и окружающих.
          </div>
        </div>
        {stepQuestion !== QuestionItems.length ? (
          <Link to="/question-start-page">
            <button className="animate__animated  animate__fadeInUp w-60 h-16 bg-green-400 transition duration-500 mx-5 px-5 py-5 cursor-pointer font-bold text-lg rounded-lg focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 hover:bg-green-700 focus:ring-opacity-50 ring-inset">
              Начать!
            </button>
            <span class="animate__animated  animate__fadeInUp relative inline-flex w-full">
              <span className="animate__animated  animate__fadeInUp absolute -top-20 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight bg-gray-800 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset rounded-full">
                цена 100млн
              </span>
            </span>
          </Link>
        ) : (
          <Link to="/final">
            <button className="animate__animated  animate__fadeInUp w-60 h-16 bg-green-400 transition duration-500 mx-5 px-5 py-5 cursor-pointer font-bold text-lg rounded-lg focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 hover:bg-green-700 focus:ring-opacity-50 ring-inset">
              Мой результат!
            </button>
          </Link>
        )}
      </section>
    </>
  );
};

export default Home;
