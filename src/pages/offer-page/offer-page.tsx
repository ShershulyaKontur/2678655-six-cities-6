import { Navigate, useParams } from 'react-router-dom';
import { Offer } from '../../mocks/types';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { ReviewForm } from '../../components/review-form/review-form';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { Heading } from '../../ui/heading/heading';
import { Map } from '../../components/map/map';
import { useEffect, useState } from 'react';
import { OffersList } from '../../components/offers-list/offers-list';
import { getRatingWidth } from '../../utils/getRatingWidth';
import { getAuthStatus, getError, getNearbyOffers, getOffer, getOfferLoadingStatus, getReviews } from '../../store/selectors';
import { OfferGalary } from '../../ui/offer-galllery/offer-gallery';
import { StatusMark } from '../../ui/status-mark/status-mark';
import { InsideList } from '../../ui/inside-list/inside-list';
import { Button } from '../../ui/button/button';
import { OfferFeatures } from '../../ui/offer-features/offer-features';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-action';
import { Spinner } from '../../ui/spinner/spinner';
import cn from 'classnames';


export function OfferPage(): JSX.Element {
  const {offerId} = useParams();
  const [chosenId, setChosenId] = useState<Offer['id'] | null>(null);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const currentOffer = useAppSelector(getOffer);
  const nearbyList = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getReviews).slice(0, 10);
  const isLoading = useAppSelector(getOfferLoadingStatus);
  const error = useAppSelector(getError);

  useEffect(() => {
    if (offerId) {
      void dispatch(fetchOfferAction(offerId));
      void dispatch(fetchNearbyOffersAction(offerId));
      void dispatch(fetchReviewsAction(offerId));
    }
  }, [offerId, dispatch]);

  if (error === 'offer-not-found/404') {
    return <Navigate to={AppRoute.Error} replace />;
  }

  if (isLoading || !currentOffer) {
    return <Spinner />;
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
              {currentOffer.isPremium && (<StatusMark isPremium/>)}
              <div className="offer__name-wrapper">
                <Heading className="offer__name">{currentOffer.title}</Heading>
                <Button
                  className={cn('offer__bookmark-button button', {
                    'offer__bookmark-button--active': currentOffer.isFavorite
                  })}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {currentOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </Button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingWidth(currentOffer.rating) }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>

              <OfferFeatures
                type={currentOffer.type}
                bedrooms={currentOffer.bedrooms}
                maxAdults={currentOffer.maxAdults}
              />

              <div className="offer__price">
                <b className="offer__price-value">€{currentOffer.price}</b>
                <span className="offer__price-text">night</span>
              </div>

              <div className="offer__inside">
                <Heading tag="h2" className="offer__inside-title">What`s inside</Heading>
                <InsideList goods={currentOffer.goods}/>
              </div>

              <div className="offer__host">
                <Heading tag="h2" className="offer__host-title">Meet the host</Heading>
                <div className="offer__host-user user">
                  <div
                    className={cn('offer__avatar-wrapper user__avatar-wrapper', {
                      'offer__avatar-wrapper--pro':currentOffer.host?.isPro
                    })}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host?.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{currentOffer.host?.name}</span>
                  {currentOffer.host?.isPro && <StatusMark isPro/>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{currentOffer.description}</p>
                </div>
              </div>

              <section className="offer__reviews reviews">
                <Heading tag="h2" className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </Heading>
                <ReviewsList reviews={reviews}/>
                {authStatus === AuthorizationStatus.Auth && (
                  offerId ? <ReviewForm offerId={offerId} /> : null
                )}
              </section>
            </div>
          </div>
          {nearbyList.length > 0 && (
            <Map
              variant="offer"
              chosenId={chosenId}
              offers={nearbyList}
              city={nearbyList[0].city}
            />
          )}
        </section>
        <div className="container">
          <section className="near-places places">
            <Heading tag="h2" className="near-places__title">Other places in the neighbourhood</Heading>
            <OffersList variant='nearPlaces' offers={nearbyList} setChosenId={setChosenId} />
          </section>
        </div>
      </main>
    </div>
  );
}
