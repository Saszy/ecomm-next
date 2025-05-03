'use client';

import { CartContextProvider } from '@/context/CartContext';

export function CartProvider({ children }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
