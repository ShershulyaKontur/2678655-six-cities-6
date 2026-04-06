type ButtonProps = {
  className: string;
  children: React.ReactNode;
  type?: 'button' | 'submit';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, type = 'button', ...rest }: ButtonProps): JSX.Element {
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}
