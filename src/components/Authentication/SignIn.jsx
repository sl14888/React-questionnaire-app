import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import Form from './Form';
import { setUser } from '../../slices/UserSlice';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (
    email,
    password,
    setLoading,
    setLoadActive,
    initialState,
    setShowAlert
  ) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
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
      title="Войти"
      handleClick={handleSignIn}
      location="/register"
      btnTitle="Уже есть аккаунт"
    />
  );
};

export default SignIn;
