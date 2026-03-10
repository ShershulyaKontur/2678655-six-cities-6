import { AppRoute, AuthorizationStatus } from '../../const/const';
import { MainPage } from '../../pages/main-page/main-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { PrivateRoute } from '../private-route/private-route';

type AppProps = {
  cityOffersCount: number;
}

export function App({ cityOffersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage cityOffersCount={cityOffersCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path={AppRoute.Error}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>);
}
