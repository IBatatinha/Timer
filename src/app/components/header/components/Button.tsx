import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ComponentProps<'button'> {
  asChild?: boolean;
}

export const Button = ({ asChild, className, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : 'button';
  return <Component className={twMerge('', className)} {...props} />;
};
