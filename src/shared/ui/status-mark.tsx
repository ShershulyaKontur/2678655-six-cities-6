type StatusMarkProps = {
  variant?: 'offer' | 'place-card';
  isPro?: boolean;
  isPremium?: boolean;
};

export function StatusMark({
  variant = 'offer',
  isPro,
  isPremium
}: StatusMarkProps): JSX.Element | null {

  if (isPremium) {
    return (
      <div className={`${variant}__mark`}>
        <span>Premium</span>
      </div>
    );
  }

  if (isPro) {
    return <span className={'offer__user-status'}>Pro</span>;
  }

  return null;
}
