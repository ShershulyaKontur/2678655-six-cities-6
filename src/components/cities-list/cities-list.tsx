import { useState } from "react";
import { OfferProps, Offers } from "../../mocks/types";
import { CitiesCard } from "../cities-card/cities-card";

type CitiesListProps = {
  offers: Offers;
};

export function CitiesList({offers}: CitiesListProps): JSX.Element {
 const [chosenId, setChosenId] = useState<OfferProps['id'] | null>(null);
  return (
   <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setChosenId(offer.id)}
          onMouseLeave={() => setChosenId(null)}
        />
      ))}
   </div>
  );
}
