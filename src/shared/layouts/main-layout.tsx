import { Outlet } from 'react-router-dom';
import { Header } from '../ui';

export function MainLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
