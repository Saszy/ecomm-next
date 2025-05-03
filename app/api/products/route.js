import { NextResponse } from 'next/server';

// Mock product data
const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 129.99,
    category: 'Electronics',
    image: '/images/headphones.jpg'
  },
  {
    id: '2',
    name: 'Smartphone Stand',
    description: 'Adjustable smartphone stand for desk or bedside',
    price: 24.99,
    category: 'Accessories',
    image: '/images/smartphone-stand.jpg'
  },
  {
    id: '3',
    name: 'Laptop Backpack',
    description: 'Water-resistant backpack with laptop compartment',
    price: 59.99,
    category: 'Bags',
    image: '/images/backpack.jpg'
  },
  {
    id: '4',
    name: 'Wireless Charger',
    description: 'Fast wireless charging pad for smartphones',
    price: 34.99,
    category: 'Electronics',
    image: '/images/wireless-charger.jpg'
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 24-hour battery life',
    price: 89.99,
    category: 'Electronics',
    image: '/images/bluetooth-speaker.jpg'
  },
  {
    id: '6',
    name: 'Fitness Tracker',
    description: 'Water-resistant fitness tracker with heart rate monitor',
    price: 79.99,
    category: 'Wearables',
    image: '/images/fitness-tracker.jpg'
  },
  {
    id: '7',
    name: 'Smart Watch',
    description: 'Smart watch with fitness tracking and notifications',
    price: 199.99,
    category: 'Wearables',
    image: '/images/smart-watch.jpg'
  },
  {
    id: '8',
    name: 'Portable Power Bank',
    description: '20,000 mAh power bank with fast charging',
    price: 49.99,
    category: 'Electronics',
    image: '/images/power-bank.jpg'
  }
];

export async function GET() {
  // In a real application, you would fetch from a database
  return NextResponse.json(products);
}