import { AppRoute } from '../../const/const';
import { MainPage } from '../../pages/main-page/main-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { PrivateRoute } from '../private-route/private-route';
import { MainLayout } from '../layouts/main-layout/main-layout';
import { AuthLayout } from '../layouts/auth-layout/auth-layout';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.Error}
            element={<NotFoundPage />}
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
        </Route>

      </Routes>
    </BrowserRouter>);
}
