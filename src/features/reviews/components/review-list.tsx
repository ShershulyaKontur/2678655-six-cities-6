import { Reviews } from '../../../shared/types';
import { ReviewItem } from './review-item';


type ReviewsListProps = {
  reviews: Reviews;
}

export function ReviewList({reviews}:ReviewsListProps): JSX.Element{
  return(
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} {...review}/>)}
    </ul>
  );
}
