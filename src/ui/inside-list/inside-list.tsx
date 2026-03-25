type InsideListProps = {
  goods: string[] | undefined;
};

export function InsideList({goods}: InsideListProps): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {goods?.map((good) => (
        <li key={good} className="offer__inside-item">
          {good}
        </li>
      ))}
    </ul>
  );
}
