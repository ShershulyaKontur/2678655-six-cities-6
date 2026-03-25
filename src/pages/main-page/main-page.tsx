import { useState } from 'react';
import { Map } from '../../components/map/map';
import { OffersList } from '../../components/offers-list/offers-list';
import { Offer } from '../../mocks/types';
import { LocationsList } from '../../ui/locations-list/locations-list';
import { Heading } from '../../ui/heading/heading';
import { useSelector } from 'react-redux';
import { getCity, getOffers } from '../../store/selectors';
import { Sorting } from '../../components/sorting/sorting';


export function MainPage(): JSX.Element{
  const [chosenId, setChosenId] = useState<Offer['id'] | null>(null);
  const currentCity = useSelector(getCity);
  const offers = useSelector(getOffers);
  const offersByCity = offers.filter((offer)=> offer.city.name === currentCity);
  const currentCityCoordinates = offersByCity[0]?.city;

  return(
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
              <b className="places__found">{offersByCity.length} places to stay in Amsterdam</b>
              <Sorting />
              <OffersList offers={offersByCity} setChosenId={setChosenId} />
            </section>
            <div className="cities__right-section">
              <Map
                variant='cities'
                chosenId={chosenId}
                offers={offersByCity}
                city={currentCityCoordinates}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
