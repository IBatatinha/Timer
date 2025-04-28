import Link from 'next/link';
import { HeaderComponents } from '..';

export type LoginProps = {};

export const Login = ({}: LoginProps) => {
  return (
    <HeaderComponents.Button
      className="px-[1.5625rem] py-2 flex items-center text-center text-[var(--default-color-secondary)] font-bold leading-normal text-[0.8125rem] uppercase justify-center rounded-[0.6875rem] border-[0.125rem] border-[#262626] border-b-[0.25rem] hover:opacity-80 transition-opacity"
      title="sign up"
      asChild
    >
      <Link passHref href="/auth/signup">
        sign up
      </Link>
    </HeaderComponents.Button>
  );
};
