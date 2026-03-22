import { Review } from '../../mocks/types';
import { formatDate } from '../../utils/formatDate';
import { getRatingWidth } from '../../utils/getRatingWidth';

export function ReviewsItem({date, user, comment, rating}: Review): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt={`${user.name}'s avatar`}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date.split('T')[0]}>
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}
