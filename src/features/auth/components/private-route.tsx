import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../shared/const/const';
import { getAuthStatus } from '../../../store/selectors';
import { useAppSelector } from '../../../shared/hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
