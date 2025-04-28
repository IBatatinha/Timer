import type { ComponentProps } from 'react';

export interface NavProps extends ComponentProps<'nav'> {}

export const Nav = (props: NavProps) => {
  return <nav className="w-full flex flex-row-reverse gap-4 items-center select-none" {...props} />;
};
