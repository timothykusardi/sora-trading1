'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, Product } from '../app/data/products';

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: 'keepSnaps',
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden px-4">
        <div className="flex gap-4 px-4">
          {Object.entries(PRODUCTS).map(([slug, prod]: [string, Product]) => (
            <Link
              key={slug}
              href={`/products/${slug}`}
              className={`
                flex-none
                relative
                rounded-2xl
                overflow-hidden
                shadow-lg
                w-[85%] md:w-[45%] lg:w-[50%]
                h-[300px] sm:h-[400px] md:h-[500px]

                /* ★ Scale on hover & tap: */
                transform transition-transform duration-300
                hover:scale-101
                active:scale-95
                cursor-pointer
              `}
            >
              {/* Full-bleed image */}
              <Image
                src={prod.img}
                alt={prod.title}
                fill
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Title & description */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase">
                  {prod.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white">
                  {prod.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}
