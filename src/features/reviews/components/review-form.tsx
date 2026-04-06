import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../../../shared/ui/button';
import { postReviewAction } from '../../../store/api-action';
import { ReviewFormData } from '../types';
import { useAppDispatch } from '../../../shared/hooks';

type ReviewFormProps = {
  offerId: string;
};

export function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState<ReviewFormData>({ rating: 0, review: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const isValid = formData.rating !== 0 &&
                  formData.review.length >= 50 &&
                  formData.review.length <= 300;

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: Number(evt.target.value)
    });

    if (error) {
      setError(null);
    }
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      review: evt.target.value
    });
    if (error) {
      setError(null);
    }
  };

  const resetForm = () => {
    setFormData({ rating: 0, review: '' });
  };

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (!isValid) {
      setError('Rating and review text (50-300 characters) are required');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      dispatch(postReviewAction({ offerId, reviewData: formData })).unwrap();
      resetForm();
    } catch (err) {
      setError('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          onChange={handleRatingChange} checked={formData.rating === 5} disabled={isSubmitting}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          onChange={handleRatingChange} checked={formData.rating === 4} disabled={isSubmitting}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onChange={handleRatingChange} checked={formData.rating === 3} disabled={isSubmitting}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          onChange={handleRatingChange} checked={formData.rating === 2} disabled={isSubmitting}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          onChange={handleRatingChange} checked={formData.rating === 1} disabled={isSubmitting}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleReviewChange}
        value={formData.review}
        disabled={isSubmitting}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <Button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
