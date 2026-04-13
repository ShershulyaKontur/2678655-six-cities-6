import { memo } from 'react';

type ButtonProps = {
  className: string;
  children: React.ReactNode;
  type?: 'button' | 'submit';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(({ className, children, type = 'button', ...rest }: ButtonProps): JSX.Element => (
  <button type={type} className={className} {...rest}>
    {children}
  </button>
));

Button.displayName = 'Button';
