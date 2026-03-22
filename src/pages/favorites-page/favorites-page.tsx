import { OffersList } from '../../components/offers-list/offers-list';
import { Offers } from '../../mocks/types';
import { Footer } from '../../ui/footer/footer';
import { Heading } from '../../ui/heading/heading';

type FavoritesPageProps = {
  offers: Offers;
}

export function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <Heading className="favorites__title">Saved listing</Heading>
            <OffersList variant='favorites' offers={favoriteOffers} />
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
