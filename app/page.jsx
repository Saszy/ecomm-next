import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Store</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Discover our amazing products with great deals and discounts.
      </p>
      <Link 
        href="/products" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        Browse Products
      </Link>
    </div>
  );
}