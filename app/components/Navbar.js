import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-pink-500 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Rota</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white">About us</a>
            </Link>
          </li>
          <li>
            <a href="#" className="text-white">My Account</a>
          </li>
          <li>
            <a href="#" className="text-white">Contact us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;