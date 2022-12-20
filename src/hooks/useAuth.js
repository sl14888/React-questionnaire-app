import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { email, password, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    password,
    token,
    id,
  };
};
