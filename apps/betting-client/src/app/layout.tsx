import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import '../global.css';

export const metadata = {
  title: 'Welcome to Gamdom Betting Dashboard',
  description: 'The best place to bet on your favorite sports',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
