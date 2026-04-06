import { useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../../../shared/const/const';
import { loginAction } from '../../../store/api-action';
import { getAuthStatus } from '../../../store/selectors';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import { Button, Heading } from '../../../shared/ui';

export function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthStatus);
  const [formData, setFormData] = useState({ login: '', password: '' });

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
  };

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <Heading className="login__title">Sign in</Heading>
            <form className="login__form form" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.login}
                  onChange={(evt) => setFormData({...formData, login: evt.target.value})}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={(evt) => setFormData({...formData, password: evt.target.value})}
                />
              </div>
              <Button className="login__submit form__submit button" type="submit">
                Sign in
              </Button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
