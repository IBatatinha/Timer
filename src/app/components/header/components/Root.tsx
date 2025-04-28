import type { ComponentProps } from 'react';

export interface RootProps extends ComponentProps<'header'> {}

export const Root = (props: RootProps) => {
  return <header className="mx-[3.75rem] max-md:mx-[2.3rem] mt-[3.125rem] flex flex-row gap-0 justify-between items-center" {...props} />;
};
