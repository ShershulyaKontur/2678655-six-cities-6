import { useState } from 'react';
import { Offer } from '../../../shared/types';
import { useAppSelector } from '../../../shared/hooks';
import { getCity, getOffers, getOffersLoadingStatus, getSortType } from '../../../store/selectors';
import { sortOffers } from '../../../shared/utils';
import { Heading, Spinner } from '../../../shared/ui';
import { LocationsList } from '../components/locations-list';
import { OffersList } from '../components/offers-list';
import { Sorting } from '../components/sorting';
import { Map } from '../../map';


export function MainPage(): JSX.Element {
  const [chosenId, setChosenId] = useState<Offer['id'] | null>(null);
  const currentCity = useAppSelector(getCity);
  const sortType = useAppSelector(getSortType);
  const offers = useAppSelector(getOffers);
  const isLoading = useAppSelector(getOffersLoadingStatus);

  const offersByCity = offers.filter((offer: Offer) => offer.city.name === currentCity);
  const cityOffersCount = offersByCity.length;
  const currentCityCoordinates = offersByCity[0]?.city || null;
  const sortedOffers = sortOffers(offersByCity, sortType);

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <Heading className="visually-hidden">Cities</Heading>
        <div className="tabs">
          <section className="locations container">
            <LocationsList city={currentCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <Heading tag='h2' className="visually-hidden">Places</Heading>
              <b className="places__found">
                {cityOffersCount > 0
                  ? `${cityOffersCount} ${cityOffersCount === 1 ? 'place' : 'places'} to stay in ${currentCity}`
                  : 'NET MEST BRO'}
              </b>
              {cityOffersCount > 0 && <Sorting />}
              <OffersList offers={sortedOffers} setChosenId={setChosenId} />
            </section>
            <div className="cities__right-section">
              {currentCityCoordinates &&
                <Map
                  variant='cities'
                  chosenId={chosenId}
                  offers={offersByCity}
                  city={currentCityCoordinates}
                />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
