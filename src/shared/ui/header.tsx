import { getAuthStatus } from '../../store/selectors';
import { useAppSelector } from '../hooks';
import { Logo } from './logo';
import { ProfileNav } from './profile-nav';

type HeaderProps = {
  variant?: 'main' | 'auth';
};

export function Header({ variant = 'main' }: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {variant === 'main' && (<ProfileNav authorizationStatus={authorizationStatus}/>)}
        </div>
      </div>
    </header>
  );
}
