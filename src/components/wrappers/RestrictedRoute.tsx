import { Navigate, Outlet } from 'react-router';
import { LocalKeys } from '../../constants/LocalKeys';
import { getLocalItem } from '../../utils';

const RestrictedRoute = () => {
  return getLocalItem(LocalKeys.IS_LOGGED_IN) ? <Navigate to="/" replace /> : <Outlet />;
};

export default RestrictedRoute;