import { Offer } from '../../mocks/types';

type OfferGalaryProps = {
  offers: Offer;
}

export function OfferGalary({offers}: OfferGalaryProps): JSX.Element{
  return(
    <div className="offer__gallery">
      {offers.images?.map((image) => (
        <div key={image} className="offer__image-wrapper">
          <img className="offer__image" src={image} alt={offers.title} />
        </div>
      ))}
    </div>
  );
}
