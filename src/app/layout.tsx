import type { Metadata } from 'next';
import { Providers } from '@/app/providers';
import { Header } from '@/components/layout/header/Header';
import { StickyHeader } from '@/components/layout/header/StickyHeader';
import LargeWithLogoCentered from '@/components/layout/footer/Footer';
import ScrollToTopButton from '@/components/ui/buttons/ScrollToTopButton';
import SupportIcon from '@/components/ui/buttons/SupportButton';

export const metadata: Metadata = {
  title: 'Online Shop',
  description: 'Your modern online shopping destination',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <StickyHeader />
          {children}
          <SupportIcon />
          <LargeWithLogoCentered />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
