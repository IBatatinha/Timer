import { HeaderComponents } from '..';

export type HeaderProps = {
  loading?: boolean;
  compact?: boolean;
};

export default function Header({ loading, compact }: HeaderProps) {
  return (
    <HeaderComponents.Root>
      <HeaderComponents.Logo />
      <HeaderComponents.Nav>
        <HeaderComponents.Login />
        <HeaderComponents.Color />
      </HeaderComponents.Nav>
    </HeaderComponents.Root>
  );
}
