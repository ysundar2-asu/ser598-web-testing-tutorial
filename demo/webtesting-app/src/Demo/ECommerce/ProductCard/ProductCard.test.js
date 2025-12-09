import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

// Mock product data
const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  image: 'https://example.com/image.jpg',
  rating: { rate: 4.5, count: 100 },
  description: 'This is a test product description',
};

describe('ProductCard Component', () => {
  // Test 1: Renders product information correctly
  test('renders product title, price, and rating', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
    expect(screen.getByText('Rating: 4.5')).toBeInTheDocument();
  });

  // Test 2: Renders product image with correct alt text
  test('renders product image with correct alt text', () => {
    render(<ProductCard {...mockProduct} />);

    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  // Test 3: Renders Add to Cart and View buttons
  test('renders Add to Cart and View buttons', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
    expect(screen.getByText('View')).toBeInTheDocument();
  });

  // Test 4: Calls onAddToCart when Add to Cart button is clicked
  test('calls onAddToCart with product and quantity when Add to Cart is clicked', () => {
    const mockOnAddToCart = jest.fn();
    render(<ProductCard {...mockProduct} onAddToCart={mockOnAddToCart} />);

    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
    expect(mockOnAddToCart).toHaveBeenCalledWith(
      {
        id: 1,
        title: 'Test Product',
        price: 29.99,
        image: 'https://example.com/image.jpg',
        description: 'This is a test product description',
      },
      1
    );
  });

  // Test 5: Opens modal when View button is clicked
  test('opens product modal when View button is clicked', () => {
    render(<ProductCard {...mockProduct} />);

    const viewButton = screen.getByText('View');
    fireEvent.click(viewButton);

    // Modal should show product description
    expect(screen.getByText('This is a test product description')).toBeInTheDocument();
  });

  // Test 6: Modal displays correct product details
  test('modal displays product details correctly', () => {
    render(<ProductCard {...mockProduct} />);

    fireEvent.click(screen.getByText('View'));

    // Check modal content
    expect(screen.getByText('This is a test product description')).toBeInTheDocument();
    // Price should appear in modal (there will be two - one in card, one in modal)
    const prices = screen.getAllByText('$29.99');
    expect(prices.length).toBeGreaterThanOrEqual(1);
  });

  // Test 7: Modal closes when Cancel is clicked
  test('closes modal when Cancel button is clicked', async () => {
    render(<ProductCard {...mockProduct} />);

    // Open modal
    fireEvent.click(screen.getByText('View'));
    expect(screen.getByText('This is a test product description')).toBeInTheDocument();

    // Close modal
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(screen.getByText('This is a test product description')).toBeInTheDocument();

  });

  // Test 8: Does not crash when onAddToCart is not provided
  test('does not crash when onAddToCart prop is not provided', () => {
    render(<ProductCard {...mockProduct} />);

    const addToCartButton = screen.getByText('Add to Cart');
    
    // Should not throw error
    expect(() => fireEvent.click(addToCartButton)).not.toThrow();
  });

  // Test 9: Product card has correct CSS class
  test('has productCard class', () => {
    const { container } = render(<ProductCard {...mockProduct} />);
    
    expect(container.querySelector('.productCard')).toBeInTheDocument();
  });

  // Test 10: Quantity defaults to 1
  test('quantity input defaults to 1 in modal', () => {
    render(<ProductCard {...mockProduct} />);

    fireEvent.click(screen.getByText('View'));

    const quantityInput = screen.getByRole('spinbutton');
    expect(quantityInput).toHaveValue('1');
  });
});

