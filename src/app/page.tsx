import Link  from 'next/link'
import Image from 'next/image'
import { PRODUCTS, Product } from './data/products'



export default function Home() {
  return (
    <div className="font-sans bg-[#F7F3EF] min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="w-full bg-[#F7F3EF] py-5 px-8 flex items-center justify-between border-b">
        <div className="text-2xl font-bold flex items-center gap-2">
          {/* Logo icon can be a SVG or image */}
          <span className="inline-block w-8 h-8 bg-black rounded-full mr-2"></span>
          Alpha Charcoal International
        </div>
        <nav className="flex gap-8 text-lg">
          <a href="#products" className="hover:text-orange-600">Products</a>
          <a href="#about" className="hover:text-orange-600">About Us</a>
          <a href="#contact" className="hover:text-orange-600">Contact</a>
        </nav>
        <a
          href="#contact"
          className="ml-6 px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded font-semibold shadow"
        >
          Get a Quote
        </a>
      </header>

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
            <a href="#contact" className="bg-white hover:bg-gray-100 px-6 py-3 text-gray-900 rounded-lg font-semibold shadow">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

{/* PRODUCTS */}
<section
  id="products"
  className="mt-0.000001 max-w-6xl mx-auto w-full pt-20 pb-12 px-4"
>
  {/* ←– make sure this heading is here, *before* the grid */}
  <h2 className="text-3xl font-bold mb-8 text-center">
    Our Products
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {(Object.entries(PRODUCTS) as [string, Product][])
      .map(([slug, prod]) => (
      <Link
        key={slug}
        href={`/products/${slug}`}
        className="flex flex-col rounded-2xl overflow-hidden shadow-lg group"
      >
        {/* …image container… */}
        <div className="relative aspect-[4/3]">
          <Image
            src={prod.img}
            alt={prod.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>

        {/* …colored panel… */}
        <div
          className={`
            ${prod.bg}
            flex-1
            p-6
            flex flex-col justify-between
            relative
          `}
        >
          <div>
            <h3 className="text-xl font-bold">{prod.title}</h3>
            <p className="mt-2 text-sm">{prod.description}</p>
          </div>

          <span className="
            absolute bottom-4 right-4
            w-8 h-8 rounded-full
            bg-white text-gray-900
            flex items-center justify-center
            text-2xl font-bold
          ">
            +
          </span>
        </div>
      </Link>
    ))}
  </div>
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
        <a href="mailto:sales@yourcompany.com" className="bg-orange-400 hover:bg-orange-500 px-8 py-3 rounded-lg font-semibold text-lg">
          Request Sample
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-lg font-bold">Quick Links</div>
            <a href="#products" className="hover:text-orange-400">Products</a>
            <a href="#about" className="hover:text-orange-400">About Us</a>
            <a href="#contact" className="hover:text-orange-400">Contact</a>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-lg font-bold">Contact info</div>
            <div>+62 800 1400 1240</div>
            <div>info@soratrading.com</div>
            <div className="flex gap-3 mt-2">
              {/* Social icons, use SVG or HeroIcons or lucide-react for real ones */}
              <span>🌐</span>
              <span>🐦</span>
              <span>💼</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Alpha Charcoal International. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

