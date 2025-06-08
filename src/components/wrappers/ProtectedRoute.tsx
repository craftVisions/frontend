import { Navigate, Outlet } from 'react-router';
import { LocalKeys } from '../../constants/LocalKeys';
import { getLocalItem } from '../../utils';

const ProtectedRoute = () => {
  return getLocalItem(LocalKeys.IS_LOGGED_IN) ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
