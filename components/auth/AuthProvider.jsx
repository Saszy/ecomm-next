'use client';

import { SessionProvider } from 'next-auth/react';
import { AuthContextProvider } from '@/context/AuthContext';

export function AuthProvider({ children }) {
  return (
    <SessionProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </SessionProvider>
  );
}