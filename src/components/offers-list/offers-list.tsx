import { useState } from "react";
import { Offers, Offer } from "../../mocks/types";
import { OfferCard } from "../offer-card/offer-card";
import { FavoriteCard } from "../favorite-card/favorite-card";

type OfferListProps = {
  offers: Offers;
  type?: 'cities' | 'favorites';
};

export function OffersList({offers, type = 'cities'}: OfferListProps): JSX.Element {
  const [chosenId, setChosenId] = useState<Offer['id'] | null>(null);
  const className = (type === 'cities') ?
  'cities__places-list places__list tabs__content' : 'favorites__places';

  return (
   <div className={className}>
       {offers.map((offer) => (
        type === 'cities' ? (
          <OfferCard
            key={offer.id}
            offer={offer}
            onMouseEnter={() => setChosenId(offer.id)}
            onMouseLeave={() => setChosenId(null)}
          />
        ) : (
          <FavoriteCard key={offer.id} offer={offer}/>
        )
      ))}
   </div>
  );
}
