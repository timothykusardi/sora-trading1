'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* logo/title */}
        <Link href="/" className="text-2xl font-bold">
          Alpha Charcoal
          <br />
          International
        </Link>

        {/* desktop links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about"    className="hover:underline">About Us</Link>
          <Link href="/contact"  className="hover:underline">Contact</Link>
          <Link
            href="/quote"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Get a Quote
          </Link>
        </nav>

        {/* hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {/* simple 3-bar icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'}
            />
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <Link href="/products" className="block hover:underline">Products</Link>
            <Link href="/about"    className="block hover:underline">About Us</Link>
            <Link href="/contact"  className="block hover:underline">Contact</Link>
            <Link
              href="/quote"
              className="block bg-orange-500 text-white px-4 py-2 rounded"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
