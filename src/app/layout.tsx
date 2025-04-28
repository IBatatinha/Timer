import type { Metadata } from 'next';
import './styles/globals.css';
import { ColorsProvider } from './context/colors';

export const metadata: Metadata = {
  title: {
    absolute: 'Timer | Better platform for your time!',
    template: 'Timer | %s',
    default: 'Timer | Better platform for your time!',
  },
  description: 'This timer was created by Batatinha to help you manage your time better.',
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased box-border bg-[var(--default-background)] text-[var(--default-color-primary)] cursor-default selection:bg-[var(--default-color-secondary)]/20">
        <ColorsProvider>{children}</ColorsProvider>
      </body>
    </html>
  );
}
