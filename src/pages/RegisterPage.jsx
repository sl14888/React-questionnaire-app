import React from 'react';
import SignUp from '../components/Authentication/SignUp';

const RegisterPage = () => {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="p-10 mx-auto w-full max-w-lg">
        <h1 className="font-bold text-center text-2xl mb-5">Регистрация</h1>
        <SignUp />
      </div>
    </section>
  );
};

export default RegisterPage;
