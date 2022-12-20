import React from 'react';
import AlertMessage from '../AlertMessage';
import { Link } from 'react-router-dom';

const Form = ({ title, handleClick, location, btnTitle }) => {
  const [loading, setLoading] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const [loadActive, setLoadActive] = React.useState(title);

  const [showAlert, setShowAlert] = React.useState(false);

  const onFinish = () => {
    setLoading(!loading);
    setLoadActive(<i className="fa fa-spinner fa-spin"></i>);
    handleClick(email, pass, setLoading, setLoadActive, title, setShowAlert);
  };

  return (
    <div className="border shadow-sm border-gray-100/5   w-full rounded-lg divide-y divide-gray-800">
      <AlertMessage
        color="red"
        text="Ошибка! Что то пошло не так!!!"
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      <div className="px-5 py-7">
        <label className="font-semibold text-sm text-white pb-1 block">
          Введите почту
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="почта"
          className="border-gray-100/5 border rounded-lg placeholder:text-white text-white bg-gray-800/5 px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        <label className="font-semibold text-sm text-white pb-1 block">
          Введите пароль
        </label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="пароль"
          className="border-gray-100/5 border rounded-lg placeholder:text-white text-white bg-gray-800/5 px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        <button
          className="transition duration-500 bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:shadow-sm focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          disabled={loading}
          onClick={onFinish}
        >
          {loadActive}
        </button>
      </div>
      <div className="py-2  text-center">
        <Link to={location}>
          <button className="transition duration-500 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
            {btnTitle} ? - {title}
          </button>
        </Link>
      </div>
      <div className=" text-sm text-white pb-1 block p-4 text-center">
        Авторизуясь, вы соглашаетесь с
        <span className="font-medium text-green-400 cursor-pointer hover:underline">
          пользовательским соглашением
        </span>
        и даёте согласие на
        <span className="font-medium text-green-400 cursor-pointer hover:underline">
          обработку персональных данных.
        </span>
      </div>
    </div>
  );
};

export default Form;
