// src/app/about/page.tsx
'use client'

import Image from 'next/image'
import { FlagIcon, CheckCircleIcon } from '@heroicons/react/outline'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative h-64 md:h-96">
        <Image
          src="/charcoal-kiln.jpg"
          alt="Charcoal kiln"
          fill
          className="object-cover object-center"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-white">
          About Us
        </h1>
      </section>

      {/* MISSION & VALUES */}
      <section className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Mission */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow">
          <FlagIcon className="w-12 h-12 text-orange-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-black">Mission</h2>
          <p>
            Our mission is to produce high-quality charcoal while promoting
            sustainable practices and supporting local communities.
          </p>
        </div>

        {/* Values */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow">
          <CheckCircleIcon className="w-12 h-12 text-orange-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-black">Values</h2>
          <p>
            We are committed to integrity, environmental responsibility, and
            excellence in all aspects of our business.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-3xl mx-auto mt-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Overview</h2>
        <p className="text-lg leading-relaxed text-black">
          Our charcoal is sustainably sourced from the most fertile regions of
          Kalimantan, working hand-in-hand with local farmers. By fostering
          strong relationships with these communities, we ensure that our
          production processes benefit both the environment and the livelihoods
          of our partners.
        </p>
      </section>

      {/* TEAM */}
      <section className="max-w-5xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Meet Our Team</h2>
        <div className="grid grid-cols-4 gap-8 text-black">
          {[
            { name: 'Yintopo Kotjik Kotan', img: '/avatar-male.png' },
            { name: 'Hayleen Evangelina Mastoyo', img: '/avatar-female.png' },
            { name: 'Rodderyo Soetarso', img: '/avatar-male.png' },
            { name: 'Timothy Kusardi', img: '/avatar-male.png' },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-semibold">{member.name}</h3>
              
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center my-16">
        <a
          href="https://wa.me/6281357385759?text=Hello%20I%27m%20interested%20in%20ordering%20your%20charcoal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-base px-5 py-2.5 rounded-lg shadow-md transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6.15L0 24l6.2-1.63A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12a11.86 11.86 0 0 0-3.48-8.52ZM12 22c-1.92 0-3.8-.5-5.44-1.44l-.39-.21-3.68 1 1-3.64-.2-.4A9.95 9.95 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Zm5.02-7.42c-.27-.14-1.6-.79-1.85-.88-.25-.1-.43-.14-.62.14s-.71.88-.87 1.06c-.16.18-.32.21-.59.07a7.47 7.47 0 0 1-2.18-1.34 8.21 8.21 0 0 1-1.52-1.89c-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.34s-.96.94-.96 2.29.98 2.65 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.2 1.26.17 1.74.1.53-.08 1.6-.65 1.82-1.28.22-.64.22-1.19.15-1.3-.07-.11-.27-.18-.57-.32Z" />
          </svg>
          <span>Contact us</span>
        </a>
      </section>
    </main>
  )
}
