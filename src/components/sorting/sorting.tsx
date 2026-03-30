import cn from 'classnames';
import { SortType } from './types';

const SORT_OPTIONS: { type: SortType; label: string }[] = [
  { type: 'popular', label: 'Popular' },
  { type: 'priceLowToHigh', label: 'Price: low to high' },
  { type: 'priceHighToLow', label: 'Price: high to low' },
  { type: 'topRated', label: 'Top rated first' },
];

export function Sorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        {SORT_OPTIONS.map(({ type, label }) => (
          <li
            key={type}
            className={cn('places__option', 'places__option--active')}
            tabIndex={0}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}
