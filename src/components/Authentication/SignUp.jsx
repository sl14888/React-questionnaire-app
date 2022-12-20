import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import Form from './Form';
import { setUser } from '../../slices/UserSlice';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (
    email,
    password,
    setLoading,
    setLoadActive,
    initialState,
    setShowAlert
  ) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setLoading(false);
        setLoadActive(initialState);

        dispatch(
          setUser({
            email: user.email,
            password: password,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/profile-page');
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setShowAlert(true);
        setLoadActive(initialState);
      });
  };

  return (
    <Form
      title="Зарегистрироваться"
      handleClick={handleSignUp}
      location="/login"
      btnTitle="Еще нет аккаунта"
    />
  );
};

export default SignUp;
