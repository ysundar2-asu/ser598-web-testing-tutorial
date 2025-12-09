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
    expect(screen.getByText('This is a test product description')).toBeInTheDocument();
  });

  // Test 6: Modal displays correct product details
  test('modal displays product details correctly', () => {
    render(<ProductCard {...mockProduct} />);

    fireEvent.click(screen.getByText('View'));

    expect(screen.getByText('This is a test product description')).toBeInTheDocument();
    const prices = screen.getAllByText('$29.99');
    expect(prices.length).toBeGreaterThanOrEqual(1);
  });

  // Test 7: Does not crash when onAddToCart is not provided
  test('does not crash when onAddToCart prop is not provided', () => {
    render(<ProductCard {...mockProduct} />);

    const addToCartButton = screen.getByText('Add to Cart');
    
    // Should not throw error
    expect(() => fireEvent.click(addToCartButton)).not.toThrow();
  });

  // Test 8: Product card has correct CSS class
  test('has productCard class', () => {
    const { container } = render(<ProductCard {...mockProduct} />);

    const productCard = container.firstChild;
    expect(productCard).toHaveClass('productCard');
  });

  // Test 9: Quantity defaults to 1
  test('quantity input defaults to 1 in modal', () => {
    render(<ProductCard {...mockProduct} />);

    fireEvent.click(screen.getByText('View'));

    const quantityInput = screen.getByRole('spinbutton');
    expect(quantityInput).toHaveValue('1');
  });

  // Test 10: Changes quantity in modal
  test('allows changing quantity in modal', () => {
    render(<ProductCard {...mockProduct} />);

    fireEvent.click(screen.getByText('View'));

    const quantityInput = screen.getByRole('spinbutton');

    // Change quantity to 5
    fireEvent.change(quantityInput, { target: { value: '5' } });

    expect(quantityInput).toHaveValue('5');
  });

  // Test 11: Adds product with custom quantity from modal
  test('adds product with custom quantity when added from modal', () => {
    const mockOnAddToCart = jest.fn();
    render(<ProductCard {...mockProduct} onAddToCart={mockOnAddToCart} />);

    fireEvent.click(screen.getByText('View'));

    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '3' } });
    const addToCartButtons = screen.getAllByText('Add to Cart');

    fireEvent.click(addToCartButtons[1]);

    expect(mockOnAddToCart).toHaveBeenCalledWith(
      {
        id: 1,
        title: 'Test Product',
        price: 29.99,
        image: 'https://example.com/image.jpg',
        description: 'This is a test product description',
      },
      3
    );
  });

  test('resets quantity to 1 when modal is cancelled', () => {
    render(<ProductCard {...mockProduct} />);

    // Open modal
    fireEvent.click(screen.getByText('View'));
    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '7' } });

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    fireEvent.click(screen.getByText('View'));

    const newQuantityInput = screen.getByRole('spinbutton');
    expect(newQuantityInput).toHaveValue('1');
  });

  // Test 13: Displays rating count
  test('displays rating information correctly', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText('Rating: 4.5')).toBeInTheDocument();
  });

  // Test 14: Image is displayed correctly
  test('image is displayed correctly', () => {
    render(<ProductCard {...mockProduct} />);

    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  // Test 15: Product details section exists
  test('has productDetails section with correct structure', () => {
    render(<ProductCard {...mockProduct} />);

    const title = screen.getByText('Test Product');
    const price = screen.getByText('$29.99');
    const rating = screen.getByText('Rating: 4.5');

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rating).toBeInTheDocument();

    expect(title).toHaveClass('title');
    expect(price).toHaveClass('price');
    expect(rating).toHaveClass('rating');
  });

  // Test 16: Action buttons are displayed
  test('displays both action buttons', () => {
    render(<ProductCard {...mockProduct} />);

    const addToCartButton = screen.getByRole('button', { name: 'Add to Cart' });
    const viewButton = screen.getByRole('button', { name: 'View' });

    expect(addToCartButton).toBeInTheDocument();
    expect(viewButton).toBeInTheDocument();
  });

  // Test 17: Modal has correct title
  test('modal displays product title as header', () => {
    render(<ProductCard {...mockProduct} />);

    fireEvent.click(screen.getByText('View'));

    expect(screen.getAllByText('Test Product').length).toBeGreaterThan(1);
  });

  // Test 18: Modal shows product image
  test('modal displays product image', () => {
    render(<ProductCard {...mockProduct} />);

    fireEvent.click(screen.getByText('View'));

    const images = screen.getAllByAltText('Test Product');
    expect(images.length).toBeGreaterThan(1);
  });
});

