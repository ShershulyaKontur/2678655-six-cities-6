import { SortType } from './types';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { useSelector } from 'react-redux';
import { getSortType } from '../../store/selectors';
import { setSortType } from '../../store/action';
import cn from 'classnames';

const SORT_OPTIONS: { type: SortType; label: string }[] = [
  { type: 'popular', label: 'Popular' },
  { type: 'priceLowToHigh', label: 'Price: low to high' },
  { type: 'priceHighToLow', label: 'Price: high to low' },
  { type: 'topRated', label: 'Top rated first' },
];

export function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const sortType = useSelector(getSortType);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentLabel = SORT_OPTIONS.find(option => option.type === sortType)?.label || 'Popular';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLabel}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {
        'places__options--opened': isOpen
      })}>
        {SORT_OPTIONS.map(({ type, label }) => (
          <li
            key={type}
            className={cn('places__option', {
              'places__option--active': sortType === type
            })}
            tabIndex={0}
            onClick={() => {
              dispatch(setSortType(type));
              setIsOpen(false);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}
