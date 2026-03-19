import { OffersList } from '../../components/offers-list/offers-list';
import { Offers } from '../../mocks/types';

type FavoritesPageProps = {
  offers: Offers;
}

export function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const uniqueCities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {uniqueCities.map((city) => {
                const currentCityOffers = favoriteOffers.filter((offer) => offer.city.name === city);
                return (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <OffersList offers={currentCityOffers} type="favorites" />
                  </li>
                );
              })}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}
