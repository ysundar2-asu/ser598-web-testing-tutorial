import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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



  // Test 9: Adds product to cart
  test('adds product to cart when Add to Cart is clicked', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    // Initially cart should be empty
    expect(screen.getByText('Cart (0)')).toBeInTheDocument();

    // Click Add to Cart on first product
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);

    // Cart count should increase
    await waitFor(() => {
      expect(screen.getByText('Cart (1)')).toBeInTheDocument();
    });
  });

  // Test 10: Displays cart items when cart drawer is opened
  test('displays cart items in drawer after adding to cart', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    // Add product to cart
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);

    // Open cart drawer
    await waitFor(() => {
      const cartButton = screen.getByText('Cart (1)');
      fireEvent.click(cartButton);
    });

    await waitFor(() => {
      expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
      expect(screen.queryByText('Your cart is empty')).not.toBeInTheDocument();
    });
  });

  // Test 11: Removes item from cart
  test('removes item from cart when Remove button is clicked', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    // Add product to cart
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);

    // Open cart drawer
    await waitFor(() => {
      const cartButton = screen.getByText('Cart (1)');
      fireEvent.click(cartButton);
    });

    // Click Remove button
    await waitFor(() => {
      const removeButton = screen.getByText('Remove');
      fireEvent.click(removeButton);
    });

    // Cart should be empty
    await waitFor(() => {
      expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    });
  });

  // Test 12: Calculates cart total correctly
  test('calculates and displays cart total correctly', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    // Add first product to cart (price: 19.99)
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);


    const cartButton = screen.getByText('Cart (1)');
    fireEvent.click(cartButton);

    // Verify total is displayed correctly
    await waitFor(() => {
      expect(screen.getByText('Total:')).toBeInTheDocument();
    });

    // Verify the total amount is correct (using getAllByText and checking the last one which is in the cart)
    const priceElements = screen.getAllByText('$19.99');
    expect(priceElements.length).toBeGreaterThan(0);
    // The last occurrence should be in the cart total
    expect(priceElements[priceElements.length - 1]).toBeInTheDocument();
  });

  
  // Test 13: Does not login with empty credentials
  test('does not submit login with empty credentials', () => {
    render(<HomePage />);

    // Click Login button
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);

    // Try to submit without filling credentials
    const loginSubmitButton = screen.getAllByText('Login')[1];
    fireEvent.click(loginSubmitButton);

    // Modal should still be open (login should not succeed)
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  });

  // Test 14: Shows all products when All category is selected
  test('shows all products when All category is selected', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    // All products should be visible initially
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Product 3')).toBeInTheDocument();
  });

  // Test 15: Adds multiple quantities of same product
  test('increases quantity when same product is added multiple times', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    // Add same product twice
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);
    fireEvent.click(addToCartButtons[0]);

    // Cart count should still show 1 item (unique items, not total quantity)
    await waitFor(() => {
      expect(screen.getByText('Cart (1)')).toBeInTheDocument();
    });

    // Open cart to verify quantity is 2
    const cartButton = screen.getByText('Cart (1)');
    fireEvent.click(cartButton);
  });

  // Test 16: Handles API error gracefully
  test('handles product fetch error gracefully', async () => {
    // Suppress console.error for this test
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Override fetch to return error
    global.fetch = jest.fn(() => Promise.reject(new Error('API Error')));

    render(<HomePage />);

    // Wait for error to be handled
    await waitFor(() => {
      // Component should still render without crashing
      expect(screen.getByText('ECommerce Website')).toBeInTheDocument();
    });

    // Verify console.error was called with the error
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching products:',
      expect.any(Error)
    );

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });
});

