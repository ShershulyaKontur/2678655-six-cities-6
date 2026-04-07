import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-action';
import { getEmail } from '../../store/selectors';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AuthStatus } from '../../app/types';
import { AppRoute, AuthorizationStatus } from '../../const';

export function ProfileNav({ authorizationStatus }: { authorizationStatus: AuthStatus }): JSX.Element {
  const dispatch = useAppDispatch();
  const email = useAppSelector(getEmail);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper" />
                <span className="header__user-name user__name">{email}</span>
                <span className="header__favorite-count">0</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link onClick={() => void dispatch(logoutAction())} className="header__nav-link" to={AppRoute.Login}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper" />
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
