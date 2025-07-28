// src/app/products/[slug]/page.tsx
import Image from 'next/image';
import { PRODUCTS } from '../../data/products';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // await the thenable here
  const { slug } = await params;

  const product = PRODUCTS[slug];
  if (!product) {
    return <p className="p-8">Sorry, product not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
      <Image
        src={product.img}
        alt={product.title}
        width={600}
        height={400}
        className="rounded-lg mb-6"
      />
      <p className="mb-6">{product.description}</p>
      <ul className="list-disc pl-5 space-y-1">
        {product.specs.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
       <a 
  href="https://wa.me/6281357385759?text=Hello%2C%20I'm%20interested%20in%20ordering%20your%20charcoal"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-base px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 mt-4"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6.15L0 24l6.2-1.63A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12a11.86 11.86 0 0 0-3.48-8.52ZM12 22c-1.92 0-3.8-.5-5.44-1.44l-.39-.21-3.68 1 1-3.64-.2-.4A9.95 9.95 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Zm5.02-7.42c-.27-.14-1.6-.79-1.85-.88-.25-.1-.43-.14-.62.14s-.71.88-.87 1.06c-.16.18-.32.21-.59.07a7.47 7.47 0 0 1-2.18-1.34 8.21 8.21 0 0 1-1.52-1.89c-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.34s-.96.94-.96 2.29.98 2.65 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.2 1.26.17 1.74.1.53-.08 1.6-.65 1.82-1.28.22-.64.22-1.19.15-1.3-.07-.11-.27-.18-.57-.32Z" />
  </svg>
  <span>Enquire</span>
</a>

    </div>
  );
}
