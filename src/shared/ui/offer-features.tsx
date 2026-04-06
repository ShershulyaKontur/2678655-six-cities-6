import { Offer } from '../../mocks/types';

type OfferFeaturesProps = {
  type: Offer['type'];
  bedrooms: Offer['bedrooms'];
  maxAdults: Offer['maxAdults'];
};

export function OfferFeatures({ type, bedrooms, maxAdults }: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
      </li>
    </ul>
  );
}
