import { getOffers } from '../../../store/selectors';
import { Offer } from '../../../shared/types';
import { FavoritesEmpty } from '../components/favorites-empty';
import { Footer, Heading } from '../../../shared/ui';
import { OffersList } from '../../offers';
import { useAppSelector } from '../../../shared/hooks';


export function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((offer: Offer) => offer.isFavorite);

  return (
    <div className={`page ${favoriteOffers.length === 0 ? 'page--favorites-empty' : ''}`}>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0 ? (
            <FavoritesEmpty/>
          ) : (
            <section className="favorites">
              <Heading className="favorites__title">Saved listing</Heading>
              <OffersList variant="favorites" offers={favoriteOffers} />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
