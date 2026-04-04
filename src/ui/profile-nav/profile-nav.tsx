import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { AuthStatus } from '../../types';

export function ProfileNav({ authorizationStatus }: { authorizationStatus: AuthStatus }): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper" />
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">3</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={AppRoute.Main}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper" />
              <span className="header__login">Sign in</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
