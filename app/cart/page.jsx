'use client';

import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { cart, total, clearCart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link 
            href="/products" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="border-t pt-4 flex justify-between items-center">
            <button 
              onClick={clearCart}
              className="text-red-600 hover:text-red-800"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-lg font-medium">Total: ${total.toFixed(2)}</p>
              <button 
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}