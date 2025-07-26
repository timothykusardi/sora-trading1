import Image from 'next/image';
import { PRODUCTS, Product } from '../../data/products';

interface Props {
  params: { slug: string };
}

export default async function ProductPage({ params }: Props) {
  // 1) await the thenable
  const { slug } = await params;

  // 2) look up your product
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
        href={`mailto:info@soratrading.com?subject=Inquiry%20about%20${encodeURIComponent(
          product.title
        )}`}
        className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded"
      >
        Contact Sales
      </a>
    </div>
  );
}
