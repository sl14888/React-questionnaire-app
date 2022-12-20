import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const ProtectRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectRoute;
