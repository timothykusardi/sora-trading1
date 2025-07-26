// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link          from 'next/link';
import Image         from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerHeight = 64; // px

  return (
    <header className="fixed inset-x-0 top-0 h-[64px] bg-white shadow z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/alpha-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold">
            Alpha Charcoal International
          </span>
        </Link>

        {/* Desktop nav (hidden < md) */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about"    className="hover:underline">About Us</Link>
          <Link href="/contact"  className="hover:underline">Contact</Link>
          <Link
            href="/quote"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger (shown < md) */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className={`
            md:hidden
            fixed inset-x-0
            top-[${headerHeight}px] bottom-0
            bg-white
            overflow-y-auto
            z-40
            p-4 space-y-4
          `}
        >
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:underline"
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:underline"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:underline"
          >
            Contact
          </Link>
          <Link
            href="/quote"
            onClick={() => setMenuOpen(false)}
            className="block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
