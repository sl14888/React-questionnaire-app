import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../slices/UserSlice';

function Header() {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  return (
    <header className="header">
      <nav className="fixed z-20 w-full p-5 bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-900/5 peer-checked:navbar-active dark:shadow-none">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link to="/">
              <div className="animate__animated  animate__fadeInDown animate__delay-0.5s w-full text-green-400 items-center flex justify-between">
                ORNAMENT UM
              </div>
            </Link>
            {/* <svg
              xmlns="<http://www.w3.org/2000/svg>"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> */}
            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                  <li className="animate__animated  animate__fadeInDown hover:text-green-400 duration-100 transition">
                    <Link
                      className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      to="/"
                    >
                      Главная
                    </Link>
                  </li>
                  <li className="animate__animated  animate__fadeInDown animate__delay-0.5s hover:text-green-400 duration-100 transition">
                    <Link
                      className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      to="/"
                    >
                      О нас
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="animate__animated  animate__fadeInDown animate__delay-0.5s menu w-full space-y-2 border-primary/10 border rounded-lg border-transparent hover:bg-gray-800 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset hover:transition-all flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max">
                <div className="block">
                  <button className="inline-flex items-center relative px-2">
                    <div className="pl-1">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: 'block',
                          fill: 'none',
                          height: '16px',
                          width: '16px',
                          stroke: '#fff',
                          strokeWidth: 3,
                          overflow: 'visible',
                        }}
                      >
                        <g fill="none" fillRule="nonzero">
                          <path d="m2 16h28"></path>
                          <path d="m2 24h28"></path>
                          <path d="m2 8h28"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: 'block',
                          height: '100%',
                          width: '100%',
                          fill: '#fff',
                        }}
                      >
                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              {isAuth ? (
                <div className="dropdown absolute transition-all top-16 py-2 bg-gray-700 rounded-lg after:content-[''] after:absolute after:bottom-full after:left-2/4 after:border-8 after:h-0 after:w-0 after:border-transparent after:border-b-gray-700 ">
                  <ul>
                    <Link to="/profile-page">
                      <li className="p-2 cursor-pointer hover:bg-gray-600 transition-all">
                        Профиль
                      </li>
                    </Link>
                    <li
                      onClick={() => dispatch(removeUser())}
                      className="p-2 cursor-pointer hover:bg-gray-600 transition-all"
                    >
                      Выйти
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="dropdown absolute transition-all top-16 py-2 bg-gray-700 rounded-lg after:content-[''] after:absolute after:bottom-full after:left-40 after:border-8 after:h-0 after:w-0 after:border-transparent after:border-b-gray-700 ">
                  <ul>
                    <Link to="/login">
                      <li className="p-2 cursor-pointer hover:bg-gray-600 transition-all">
                        Войти в аккаунт
                      </li>
                    </Link>
                    <Link to="/register">
                      <li className="p-2 cursor-pointer hover:bg-gray-600 transition-all">
                        Зарегистрироваться
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
