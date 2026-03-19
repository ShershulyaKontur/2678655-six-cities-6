import { Offer, Offers } from '../../mocks/types';
import { OfferCard } from '../offer-card/offer-card';
import { FavoriteCard } from '../favorite-card/favorite-card';

type OfferListProps = {
  offers: Offers;
  type?: 'cities' | 'favorites';
  setChosenId?: (id: Offer['id'] | null) => void;
};

export function OffersList({ offers, type = 'cities', setChosenId }: OfferListProps): JSX.Element {

  const className = type === 'cities'
    ? 'cities__places-list places__list tabs__content'
    : 'favorites__places';

  return (
    <div className={className}>
      {offers.map((offer) => (
        type === 'cities' ? (
          <OfferCard
            key={offer.id}
            offer={offer}
            onMouseEnter={() => setChosenId?.(offer.id)}
            onMouseLeave={() => setChosenId?.(null)}
          />
        ) : (
          <FavoriteCard key={offer.id} offer={offer} />
        )
      ))}
    </div>
  );
}
