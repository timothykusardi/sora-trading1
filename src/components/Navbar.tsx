'use client'

import { useState } from 'react';
import Link          from 'next/link';
import Image         from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="block md:hidden bg-[#F9F5F0] shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* ←— Replace the old circle + text with a flex‐aligned logo */}
        <Link href="/" className="flex items-center space-x-3">
          {/* Circle mask */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/alpha-logo.png"
              alt="Alpha Charcoal International"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          {/* Company name */}
          <span className="text-2xl font-bold">
            Alpha Charcoal International
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about"    className="hover:underline">About Us</Link>
          <Link href="/contact"  className="hover:underline">Contact</Link>
          <Link
            href="/quote"
            className="ml-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-page border-t px-4 pb-4 space-y-2">
          <Link href="/products" className="block py-2" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/about" className="block py-2" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="/quote"
            className="block bg-orange-500 text-white px-4 py-2 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
