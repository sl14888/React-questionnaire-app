import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../slices/UserSlice';

const ProfilePage = () => {
  const { email, password } = useAuth();
  const dispatch = useDispatch();

  return (
    <section className="flex items-center justify-center h-full">
      <div className="mx-auto w-full max-w-lg ">
        <h1 className="font-bold text-center text-2xl mb-5">Профиль</h1>
        <div className="text-center border-y  mx-auto bg-gray-800/5 shadow-xl  w-full rounded-lg">
          <div className="w-24 py-2 mx-auto rounded-full">
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
          <div className="px-5 py-7 border-b border-gray-800">
            <span>
              <p className="font-bold text-3xl text-green-400">{email}</p>
            </span>
          </div>
          <div className="px-5 py-7 border-b border-gray-800">
            <span>Пароль: </span>
            {password}
          </div>
          <div className="px-5 py-3 border-b border-gray-800">
            <Link to="/final">
              <button className="transition duration-500 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-white hover:bg-gray-800 focus:outline-none focus:ring-opacity-50 ring-inset">
                Посмотреть результат теста
              </button>
            </Link>
          </div>
          <div className="flex">
            <div className="w-1/2 py-4 border-r border-gray-800 transition duration-500 cursor-pointer hover:bg-gray-800">
              Редактировать
            </div>
            <div
              onClick={() => dispatch(removeUser())}
              className="w-1/2 py-4 transition duration-500 cursor-pointer hover:bg-gray-800"
            >
              Выйти
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
