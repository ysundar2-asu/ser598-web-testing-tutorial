import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import HomePage from './HomePage';

// Mock fetch API
const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    price: 19.99,
    image: 'https://example.com/product1.jpg',
    category: "men's clothing",
    rating: { rate: 4.0, count: 50 },
    description: 'Product 1 description',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 29.99,
    image: 'https://example.com/product2.jpg',
    category: 'electronics',
    rating: { rate: 4.5, count: 100 },
    description: 'Product 2 description',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 39.99,
    image: 'https://example.com/product3.jpg',
    category: "women's clothing",
    rating: { rate: 3.5, count: 75 },
    description: 'Product 3 description',
  },
];

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes('products')) {
      return Promise.resolve({
        json: () => Promise.resolve(mockProducts),
      });
    }
    if (url.includes('auth/login')) {
      return Promise.resolve({
        json: () => Promise.resolve({ token: 'fake-token' }),
      });
    }
    return Promise.reject(new Error('Unknown API'));
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('HomePage Component', () => {
  // Test 1: Renders homepage header
  test('renders e-commerce header with title', async () => {
    render(<HomePage />);

    expect(screen.getByText('ECommerce Website')).toBeInTheDocument();
  });

  // Test 2: Renders Login button when user is not logged in
  test('renders Login button when user is not logged in', () => {
    render(<HomePage />);

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  // Test 3: Renders Cart button with count
  test('renders Cart button with item count', () => {
    render(<HomePage />);

    expect(screen.getByText('Cart (0)')).toBeInTheDocument();
  });

  // Test 4: Fetches and displays products
  test('fetches and displays products on mount', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      // expect(screen.getByText('Product 2')).toBeInTheDocument();
      // expect(screen.getByText('Product 3')).toBeInTheDocument();
    });
  });

  // Test 5: Opens login modal when Login button is clicked
  test('opens login modal when Login button is clicked', () => {
    render(<HomePage />);

    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  // Test 6: Renders category filter dropdown
  test('renders category filter section', () => {
    render(<HomePage />);

    expect(screen.getByText('Categories')).toBeInTheDocument();
  });

  // Test 7: Cart drawer opens when Cart button is clicked
  test('opens cart drawer when Cart button is clicked', () => {
    render(<HomePage />);

    const cartButton = screen.getByText('Cart (0)');
    fireEvent.click(cartButton);

    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });


  // Test 8: Displays product prices correctly
  test('displays product prices correctly', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('$19.99')).toBeInTheDocument();
    });
  });


});

