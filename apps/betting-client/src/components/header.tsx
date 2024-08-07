'use client';

import Link from 'next/link';

const Header = () => {
  const notImplemented = () => {
    alert('Feature unavailable');
  };

  return (
    <header className="bg-primary p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gold text-2xl font-bold tracking-wide">
          <Link href="/">
            GAMDOM
          </Link>
        </div>
        <nav className="space-x-6">
          <Link
            href="/"
            className="font-bold text-yellow-300 hover:text-yellow-400"
          >
            Sports
          </Link>
          <Link href="/" className="font-bold hover:text-yellow-400">
            Casino
          </Link>
          <Link href="/" className="font-bold hover:text-yellow-400">
            Live Roulette
          </Link>
          <Link href="/" className="font-bold hover:text-yellow-400">
            Promotions
          </Link>
        </nav>
        <div className="flex items-center space-x-3">
          <button
            className="btn text-primary bg-white"
            onClick={notImplemented}
          >
            Login
          </button>
          <button
            className="btn border-2 border-solid border-white"
            onClick={notImplemented}
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
