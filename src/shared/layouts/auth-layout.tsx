import { Outlet } from 'react-router-dom';
import { Header } from '../ui';

export function AuthLayout(): JSX.Element {
  return(
    <>
      <Header variant={'auth'} />
      <Outlet/>
    </>
  );
}
