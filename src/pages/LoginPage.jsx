import React from 'react';
import SignIn from '../components/Authentication/SignIn';

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="p-10 mx-auto w-full max-w-lg">
        <h1 className="font-bold text-center text-2xl mb-5">Вход</h1>
        <SignIn />
      </div>
    </section>
  );
};

export default LoginPage;
