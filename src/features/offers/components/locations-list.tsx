import { DEFAULT_LOCATIONS } from '../../../shared/const/const';
import { useAppDispatch } from '../../../shared/hooks';
import { setCity } from '../../../store/action';
import cn from 'classnames';

type LocationsListProps = {
  city: string;
};

export function LocationsList({city}: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = (cityName: string) => {
    if (cityName === city){
      return;
    }
    dispatch(setCity(cityName));
  };

  return (
    <ul className="locations__list tabs__list">
      {DEFAULT_LOCATIONS.map((location) => (
        <li key={location} className="locations__item">
          <a
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handleCityClick(location);
            }}
            className={cn('locations__item-link', 'tabs__item', {
              'tabs__item--active': location === city,
            })}
          >
            <span>{location}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
