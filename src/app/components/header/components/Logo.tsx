import Link from 'next/link';
import { HeaderComponents } from '..';
import { Orbitron } from 'next/font/google';

export type LogoProps = {};

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const Logo = () => {
  return (
    <HeaderComponents.Button className="h-[2.8125rem] cursor-pointer select-none" title="Timer Logo" asChild>
      <Link passHref href="/">
        <h1 className={`${orbitron.className} text-shadow-[var(--default-text-shadow)] text-[var(--default-color-secondary)] leading-normal tracking-normal font-bold text-[1.85rem] hover:brightness-[20] transition-all duration-150 ease-in-out`}>T</h1>
      </Link>
    </HeaderComponents.Button>
  );
};
