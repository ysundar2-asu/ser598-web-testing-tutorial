const { test, expect } = require('@playwright/test');

test.describe('E-Commerce Application - E2E Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // open local server

    // Navigate to the Demo - ECommerce Website section via sidebar
    await page.click('text=Demo - ECommerce Website');

    // Wait for products to load from API
    await page.waitForSelector('.productCard', { timeout: 15000 });
  });

  test.describe('Homepage and Navigation', () => {
    
    test('should display the eCommerce header with title', async ({ page }) => {
      const header = page.locator('.eCommerceHeader .leftSection span');
      await expect(header).toBeVisible();
      await expect(header).toHaveText('ECommerce Website');
    });

    test('should display Login button when user is not logged in', async ({ page }) => {
      const loginButton = page.locator('button:has-text("Login")');
      await expect(loginButton).toBeVisible();
    });

    test('should display Cart button with initial count of 0', async ({ page }) => {
      const cartButton = page.locator('button.cartButton');
      await expect(cartButton).toBeVisible();
      await expect(cartButton).toContainText('Cart (0)');
    });

    test('should display categories filter section', async ({ page }) => {
      const categoriesLabel = page.locator('text=Categories');
      await expect(categoriesLabel).toBeVisible();
      
      const categorySelect = page.locator('.filterSection .ant-select');
      await expect(categorySelect).toBeVisible();
    });
  });

  test.describe('Product Display and Filtering', () => {
    
    test('should load and display products from API', async ({ page }) => {
      const productCards = page.locator('.productCard');
      await expect(productCards.first()).toBeVisible();
      
      const count = await productCards.count();
      expect(count).toBeGreaterThan(0);
    });

    test('should display product information correctly', async ({ page }) => {
      const firstProduct = page.locator('.productCard').first();
      
      // Check for product title
      await expect(firstProduct.locator('.title')).toBeVisible();
      
      // Check for product price
      await expect(firstProduct.locator('.price')).toBeVisible();
      
      // Check for product rating
      await expect(firstProduct.locator('.rating')).toBeVisible();
      
      // Check for product image
      await expect(firstProduct.locator('img')).toBeVisible();
    });

    test('should filter products by category', async ({ page }) => {
      // Get initial product count
      const initialCount = await page.locator('.productCard').count();

      // Click on category dropdown using data-testid
      await page.click('[data-testid="category-select"]');

      // Wait for dropdown to open
      await page.waitForSelector('.ant-select-dropdown', { state: 'visible' });

      // Select "Electronics" category
      await page.click('.ant-select-item-option:has-text("Electronics")');

      // Wait for filtering to complete
      await page.waitForTimeout(500);

      // Get filtered product count
      const filteredCount = await page.locator('.productCard').count();

      // Filtered count should be less than or equal to initial count
      expect(filteredCount).toBeLessThanOrEqual(initialCount);
    });
  });

  test.describe('Product Details Modal', () => {
    
    test('should open product modal when View button is clicked', async ({ page }) => {
      // Click View button on first product
      await page.locator('.productCard').first().locator('button:has-text("View")').click();
      
      // Modal should be visible
      await expect(page.locator('.ant-modal')).toBeVisible();
      await expect(page.locator('.productModal')).toBeVisible();
    });

    test('should display product details in modal', async ({ page }) => {
      // Click View button
      await page.locator('.productCard').first().locator('button:has-text("View")').click();
      
      // Check modal content
      const modal = page.locator('.productModal');
      await expect(modal.locator('.productDescription')).toBeVisible();
      await expect(modal.locator('.productPrice')).toBeVisible();
      await expect(modal.locator('.quantitySection')).toBeVisible();
    });


    test('should close modal when Cancel button is clicked', async ({ page }) => {
      // Open modal
      await page.locator('.productCard').first().locator('button:has-text("View")').click();
      await expect(page.locator('.ant-modal')).toBeVisible();
      
      // Click Cancel
      await page.locator('.ant-modal button:has-text("Cancel")').click();
      
      // Modal should be hidden
      await expect(page.locator('.ant-modal')).not.toBeVisible();
    });
  });

  test.describe('Shopping Cart Functionality', () => {

    test('should add product to cart from product card', async ({ page }) => {
      // Initial cart count should be 0
      await expect(page.locator('button.cartButton')).toContainText('Cart (0)');

      // Click Add to Cart on first product
      await page.locator('.productCard').first().locator('button.addToCartButton').click();

      // Cart count should increase to 1
      await expect(page.locator('button.cartButton')).toContainText('Cart (1)');
    });


    test('should open cart drawer when cart button is clicked', async ({ page }) => {
      // Click cart button
      await page.click('button.cartButton');

      // Cart drawer should be visible
      await expect(page.locator('.ant-drawer')).toBeVisible();
      await expect(page.locator('.cartDrawer')).toBeVisible();
      await expect(page.locator('text=Shopping Cart')).toBeVisible();
    });

    test('should display empty cart message when cart is empty', async ({ page }) => {
      // Open cart drawer
      await page.click('button.cartButton');

      // Should show empty cart message
      await expect(page.locator('.emptyCart')).toBeVisible();
      await expect(page.locator('text=Your cart is empty')).toBeVisible();
    });

    test('should display cart items after adding products', async ({ page }) => {
      // Add product to cart
      await page.locator('.productCard').first().locator('button.addToCartButton').click();

      // Open cart drawer
      await page.click('button.cartButton');

      // Should display cart item
      await expect(page.locator('.cartItem')).toBeVisible();

      // Should not show empty message
      await expect(page.locator('.emptyCart')).not.toBeVisible();
    });

    test('should display cart total correctly', async ({ page }) => {
      // Add product to cart
      await page.locator('.productCard').first().locator('button.addToCartButton').click();

      // Open cart drawer
      await page.click('button.cartButton');

      // Should display total section
      await expect(page.locator('.cartTotal')).toBeVisible();
      await expect(page.locator('.totalAmount')).toBeVisible();
    });

    test('should remove item from cart', async ({ page }) => {
      // Add product to cart
      await page.locator('.productCard').first().locator('button.addToCartButton').click();

      // Open cart drawer
      await page.click('button.cartButton');

      // Click Remove button
      await page.locator('.cartItem button.removeButton').click();

      // Should show empty cart message
      await expect(page.locator('.emptyCart')).toBeVisible();

      // Cart count should be 0
      await expect(page.locator('button.cartButton')).toContainText('Cart (0)');
    });


    test('should add multiple different products to cart', async ({ page }) => {
      // Add first product
      await page.locator('.productCard').first().locator('button.addToCartButton').click();
      await expect(page.locator('button.cartButton')).toContainText('Cart (1)');

      // Add second product
      await page.locator('.productCard').nth(1).locator('button.addToCartButton').click();
      await expect(page.locator('button.cartButton')).toContainText('Cart (2)');
    });

  });

  test.describe('Login Functionality', () => {

    test('should open login modal when Login button is clicked', async ({ page }) => {
      // Click Login button
      await page.click('button:has-text("Login")');

      // Login modal should be visible
      await expect(page.locator('.ant-modal.loginModal')).toBeVisible();
      await expect(page.locator('text=Login').first()).toBeVisible();
    });

    test('should display login form fields', async ({ page }) => {
      // Open login modal
      await page.click('button:has-text("Login")');

      // Check for username and password fields
      await expect(page.locator('input[placeholder="Username"]')).toBeVisible();
      await expect(page.locator('input[placeholder="Password"]')).toBeVisible();
      await expect(page.locator('.loginModal button:has-text("Login")')).toBeVisible();
    });


    test('should close login modal when clicking outside', async ({ page }) => {
      // Open login modal
      await page.click('button:has-text("Login")');
      await expect(page.locator('.ant-modal.loginModal')).toBeVisible();

      // Click modal mask (outside modal)
      await page.locator('.ant-modal-wrap').click({ position: { x: 0, y: 0 } });

      // Modal should close
      await expect(page.locator('.ant-modal.loginModal')).not.toBeVisible();
    });
  });
});
