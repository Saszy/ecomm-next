import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/lib/db';
import User from '@/lib/models/User';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          await connectToDatabase();
          
          // In a real application, fetch user from database
          // For demo purposes, we'll use a hardcoded user
          const demoUser = {
            id: '1',
            name: 'Demo User',
            email: 'user@example.com',
            password: await bcrypt.hash('password123', 10)
          };
          
          // Check if the email matches
          if (demoUser.email !== credentials.email) {
            return null;
          }
          
          // Verify password
          const isValid = await bcrypt.compare(
            credentials.password,
            demoUser.password
          );
          
          if (!isValid) {
            return null;
          }
          
          return {
            id: demoUser.id,
            name: demoUser.name,
            email: demoUser.email
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };