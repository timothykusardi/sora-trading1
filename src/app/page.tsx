import Link  from 'next/link'
import Image from 'next/image'
import { PRODUCTS, Product } from './data/products'
import ProductCarousel from '../components/ProductCarousel'


export default function Home() {
  return (
    <div className="font-sans bg-[#F7F3EF] min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center py-16 px-4"
        style={{
          background: "url('/charcoal-hero.jpg') center/cover",
        }}
      >
        {/* Add a dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Premium Indonesian<br />
            Charcoal &amp; Biomass
          </h1>
          <p className="text-lg text-white mb-8">
            Sustainably sourced. Globally shipped.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#products" className="bg-orange-400 hover:bg-orange-500 px-6 py-3 text-white rounded-lg font-semibold shadow">
              Explore Products
            </a>
          </div>
        </div>
      </section>

{/* PRODUCTS */}
<section id="products" className="pt-20 pb-12 bg-[#FAF5F0]">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <ProductCarousel />
      </section>




      {/* WHY CHOOSE US & ABOUT US */}
      <section className="max-w-6xl mx-auto w-full py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="font-bold">Sustainable Sourcing</div>
            </div>
            <div>
              <div className="font-bold">Premium Quality Control</div>
            </div>
            <div>
              <div className="font-bold">Worldwide Logistics</div>
            </div>
          </div>
          <blockquote className="text-gray-700 italic border-l-4 border-orange-400 pl-4">
            “The best charcoal supplier we’ve worked with! Exceptional quality and reliable delivery every time.”
          </blockquote>
        </div>
        {/* About Us */}
        <div id="about">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            At Alpha Charcoal International, we take pride in sourcing premium Indonesian charcoal &amp; biomass. We guarantee consistent quality and smooth international delivery, backed by sustainable practices and professional service.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-900 text-white py-8 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
          <a
    href="https://wa.me/6281357385759?text=Hello%20I%27m%20interested%20in%20ordering%20your%20charcoal"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold text-lg flex items-center space-x-2"
  >
    {/* Optional WhatsApp icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6.15L0 24l6.2-1.63A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12a11.86 11.86 0 0 0-3.48-8.52ZM12 22c-1.92 0-3.8-.5-5.44-1.44l-.39-.21-3.68 1 1-3.64-.2-.4A9.95 9.95 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Zm5.02-7.42c-.27-.14-1.6-.79-1.85-.88-.25-.1-.43-.14-.62.14s-.71.88-.87 1.06c-.16.18-.32.21-.59.07a7.47 7.47 0 0 1-2.18-1.34 8.21 8.21 0 0 1-1.52-1.89c-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.34s-.96.94-.96 2.29.98 2.65 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.2 1.26.17 1.74.1.53-.08 1.6-.65 1.82-1.28.22-.64.22-1.19.15-1.3-.07-.11-.27-.18-.57-.32Z" />
    </svg>
    <span>Chat on WhatsApp</span>
  </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-100 py-8 px-4">
        
          
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-lg font-bold">Contact info</div>
            <div>+62 813 5738 5759</div>
            <div>acoalintl@gmail.com</div>
            <div className="flex gap-3 mt-2">
              {/* Social icons, use SVG or HeroIcons or lucide-react for real ones */}
              <span>🌐</span>
              <span>🐦</span>
              <span>💼</span>
            </div>
          </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Alpha Charcoal International. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

