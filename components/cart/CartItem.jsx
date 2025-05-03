'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex border rounded-lg p-4">
      <div className="relative w-24 h-24 bg-gray-100 rounded">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="96px"
            className="object-cover rounded"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
        
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="w-8 h-8 flex items-center justify-center border rounded-l-md disabled:text-gray-300"
            >
              -
            </button>
            <span className="w-10 text-center border-t border-b">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center border rounded-r-md"
            >
              +
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
      
      <div className="ml-4 flex items-center">
        <span className="font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}