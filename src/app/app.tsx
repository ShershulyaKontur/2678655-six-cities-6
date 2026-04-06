import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../shared/const';
import { AuthLayout, MainLayout } from '../shared/layouts';
import { MainPage, OfferPage } from '../features/offers';
import { LoginPage, PrivateRoute } from '../features/auth';
import { FavoritesPage } from '../features/favorites';
import { NotFoundPage } from '../pages';


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
