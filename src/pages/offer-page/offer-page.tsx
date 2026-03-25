import { Navigate, useParams } from 'react-router-dom';
import { Offer } from '../../mocks/types';
import { AppRoute } from '../../const/const';
import { ReviewForm } from '../../components/review-form/review-form';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { Heading } from '../../ui/heading/heading';
import { mockReviewsList } from '../../mocks/mockReviewsList';
import { mockOffersNearbyList } from '../../mocks/mockOffersNearbyList';
import { Map } from '../../components/map/map';
import { useState } from 'react';
import { OffersList } from '../../components/offers-list/offers-list';
import { getRatingWidth } from '../../utils/getRatingWidth';
import { useSelector } from 'react-redux';
import { getOffers } from '../../store/selectors';
import { OfferGalary } from '../../ui/offer-galllery/offer-gallery';
import cn from 'classnames';
import { OfferMark } from '../../ui/offer-mark/offer-mark';


export function OfferPage(): JSX.Element {
  const {offerId} = useParams();
  const [chosenId, setChosenId] = useState<Offer['id'] | null>(null);
  const offers = useSelector(getOffers);
  const currentOffer = offers.find((offer) => offer.id === offerId);

  if (!currentOffer) {
    return <Navigate to={AppRoute.Error} />;
  }

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGalary offers={currentOffer}/>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (<OfferMark/>)}
              <div className="offer__name-wrapper">
                <Heading className="offer__name">{currentOffer.title}</Heading>
                <button
                  className={cn('offer__bookmark-button button',
                    {'offer__bookmark-button--active' : currentOffer.isFavorite}
                  )}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {currentOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingWidth(currentOffer.rating) }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{currentOffer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">€{currentOffer.price}</b>
                <span className="offer__price-text">night</span>
              </div>

              <div className="offer__inside">
                <Heading tag="h2" className="offer__inside-title">What`s inside</Heading>
                <ul className="offer__inside-list">
                  {currentOffer.goods?.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <Heading tag="h2" className="offer__host-title">Meet the host</Heading>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper user__avatar-wrapper ${currentOffer.host?.isPro ? 'offer__avatar-wrapper--pro' : ''}`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host?.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{currentOffer.host?.name}</span>
                  {currentOffer.host?.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  {currentOffer.description?.split('\n').map((paragraph) => (
                    <p key={paragraph} className="offer__text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <section className="offer__reviews reviews">
                <Heading tag="h2" className="reviews__title">
                  Reviews · <span className="reviews__amount">{mockReviewsList.length}</span>
                </Heading>
                <ReviewsList reviews={mockReviewsList}/>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map variant='offer' chosenId={chosenId} offers={mockOffersNearbyList} city={mockOffersNearbyList[0].city}/>
        </section>

        <div className="container">
          <section className="near-places places">
            <Heading tag="h2" className="near-places__title">Other places in the neighbourhood</Heading>
            <OffersList variant='nearPlaces' offers={mockOffersNearbyList} setChosenId={setChosenId} />
          </section>
        </div>
      </main>
    </div>
  );
}
