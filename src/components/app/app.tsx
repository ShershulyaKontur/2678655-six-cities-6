import { MainPage } from "../../pages/main-page/main-page";

type AppProps = {
  cityOffersCount: number;
}

export function App({ cityOffersCount }: AppProps): JSX.Element {
  return <MainPage cityOffersCount={cityOffersCount} />;
}
