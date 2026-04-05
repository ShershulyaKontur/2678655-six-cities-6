import { Link, generatePath } from 'react-router-dom';
import { Offer, OfferNearby } from '../../mocks/types';
import { AppRoute } from '../../const/const';
import { Heading } from '../../ui/heading/heading';
import { getRatingWidth } from '../../utils/getRatingWidth';
import { StatusMark } from '../../ui/status-mark/status-mark';
import cn from 'classnames';
import { Button } from '../../ui/button/button';

type OfferCardProps = {
  offer: Offer | OfferNearby;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  variant?: 'cities' | 'near-places';
}

export function OfferCard({
  offer,
  onMouseEnter,
  onMouseLeave,
  variant = 'cities'
}: OfferCardProps): JSX.Element {
  const { id, title, type, price, isPremium, isFavorite, rating, previewImage } = offer;

  const cardClassName = variant === 'cities'
    ? 'cities__card place-card'
    : 'near-places__card place-card';

  const imageWrapperClassName = variant === 'cities'
    ? 'cities__image-wrapper place-card__image-wrapper'
    : 'near-places__image-wrapper place-card__image-wrapper';

  return (
    <article
      className={cardClassName}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && <StatusMark variant='place-card' isPremium/>}

      <div className={imageWrapperClassName}>
        <Link
          to={generatePath(AppRoute.Offer, { offerId: id })}
        >
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/ night</span>
          </div>
          <Button
            className={cn('place-card__bookmark-button', 'button', {
              'place-card__bookmark-button--active': isFavorite
            })}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </Button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <Heading tag="h2" className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { offerId: id })}>
            {title}
          </Link>
        </Heading>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
