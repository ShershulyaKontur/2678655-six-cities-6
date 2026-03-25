type OfferMarkProps = {
  variant?: 'place-card' | 'offer';
}

export function OfferMark({variant = 'offer'}: OfferMarkProps): JSX.Element{
  return(
    <div className={`${variant}__mark`}>
      <span>Premium</span>
    </div>
  );
}
