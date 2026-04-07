import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type FavoritesLocationProps = {
  city: string;
};

export function FavoritesLocation({ city }: FavoritesLocationProps): JSX.Element {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link
          className="locations__item-link"
          to={`${AppRoute.Main}?city=${city}`}
        >
          <span>{city}</span>
        </Link>
      </div>
    </div>
  );
}
