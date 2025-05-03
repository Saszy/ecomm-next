'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();
  const { user, logout } = useAuth();
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">NextShop</Link>
          
          <nav className="flex items-center space-x-6">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`${pathname === '/products' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Products
            </Link>
            
            <Link 
              href="/cart" 
              className="relative text-gray-700 hover:text-blue-600"
            >
              <span>Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Hi, {user.name}</span>
                <button 
                  onClick={logout}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className={`${pathname === '/login' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
