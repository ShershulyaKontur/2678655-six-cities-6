import { generatePath, Link } from 'react-router-dom';
import { Button, Heading, StatusMark } from '../../../shared/ui';
import { Offer } from '../../../shared/types';
import { AppRoute } from '../../../shared/const/const';
import { getRatingWidth } from '../../../shared/utils';
import cn from 'classnames';

type FavoriteCardProps = {
  offer: Offer;
}

export function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {offer.isPremium && <StatusMark variant='place-card' isPremium/>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { offerId: offer.id })}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Button
            className={cn('place-card__bookmark-button', 'button',
              {'place-card__bookmark-button--active': offer.isFavorite})}
          >
            <svg className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </Button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Heading tag='h2' className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { offerId: offer.id })}>
            {offer.title}
          </Link>
        </Heading>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
