const { test, expect } = require('@playwright/test');

test.describe('E-Commerce User Flows - Complete Scenarios', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('text=Demo - ECommerce Website');
    await page.waitForSelector('.productCard', { timeout: 15000 });
  });

  // test('Complete shopping flow: Browse -> Filter -> View -> Add to Cart -> Review Cart', async ({ page }) => {
  //   // Step 1: Browse products
  //   const productCards = page.locator('.productCard');
  //   const initialCount = await productCards.count();
  //   expect(initialCount).toBeGreaterThan(0);
    
  //   // Step 2: Filter by category
  //   await page.click('[data-testid="category-select"]');
  //   await page.waitForSelector('.ant-select-dropdown', { state: 'visible' });
  //   await page.click('.ant-select-item-option:has-text("Electronics")');
  //   await page.waitForTimeout(500);
    
  //   // Step 3: View product details
  //   await page.locator('.productCard').first().locator('button:has-text("View")').click();
  //   await expect(page.locator('.productModal')).toBeVisible();
    
  //   // Step 4: Change quantity and add to cart
  //   await page.locator('.quantitySection input[type="number"]').fill('2');
  //   await page.locator('.ant-modal button.modalAddToCartButton').click();
    
  //   // Step 5: Verify cart updated
  //   await expect(page.locator('button.cartButton')).toContainText('Cart (2)');
    
  //   // Step 6: Open and review cart
  //   await page.click('button.cartButton');
  //   await expect(page.locator('.cartItem')).toBeVisible();
  //   await expect(page.locator('.cartTotal')).toBeVisible();
  // });

  test('Multiple products shopping flow', async ({ page }) => {
    // Add first product
    await page.locator('.productCard').first().locator('button.addToCartButton').click();
    await expect(page.locator('button.cartButton')).toContainText('Cart (1)');
    
    // Filter to different category
    await page.click('[data-testid="category-select"]');
    await page.waitForSelector('.ant-select-dropdown', { state: 'visible' });
    await page.click('.ant-select-item-option:has-text("Jewelery")');
    await page.waitForTimeout(500);
    
    // Add second product from different category
    await page.locator('.productCard').first().locator('button.addToCartButton').click();
    await expect(page.locator('button.cartButton')).toContainText('Cart (2)');
    
    // Open cart and verify both items
    await page.click('button.cartButton');
    const cartItems = page.locator('.cartItem');
    const itemCount = await cartItems.count();
    expect(itemCount).toBe(2);
  });


  test('Cart management flow: Add, Review, Remove', async ({ page }) => {
    // Add multiple products
    await page.locator('.productCard').first().locator('button.addToCartButton').click();
    await page.locator('.productCard').nth(1).locator('button.addToCartButton').click();
    await page.locator('.productCard').nth(2).locator('button.addToCartButton').click();
    
    await expect(page.locator('button.cartButton')).toContainText('Cart (3)');
    
    // Open cart
    await page.click('button.cartButton');
    
    // Verify all items are there
    let cartItems = page.locator('.cartItem');
    let itemCount = await cartItems.count();
    expect(itemCount).toBe(3);
    
    // Remove one item
    await page.locator('.cartItem').first().locator('button.removeButton').click();
    
    // Verify item removed
    await page.waitForTimeout(300);
    cartItems = page.locator('.cartItem');
    itemCount = await cartItems.count();
    expect(itemCount).toBe(2);
    
    // Verify cart count updated
    await expect(page.locator('button.cartButton')).toContainText('Cart (2)');
  });


  // test('Category filtering comprehensive flow', async ({ page }) => {
  //   // Get all products count
  //   await page.click('[data-testid="category-select"]');
  //   await page.waitForSelector('.ant-select-dropdown', { state: 'visible' });
  //   await page.click('.ant-select-item-option:has-text("All")');
  //   await page.waitForTimeout(500);

  //   const allProductsCount = await page.locator('.productCard').count();

  //   // Filter by each category and verify
  //   const categories = ["Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"];

  //   for (const category of categories) {
  //     await page.click('[data-testid="category-select"]');
  //     await page.waitForSelector('.ant-select-dropdown', { state: 'visible' });
  //     await page.click(`.ant-select-item-option:has-text("${category}")`);
  //     await page.waitForTimeout(500);

  //     const filteredCount = await page.locator('.productCard').count();
  //     expect(filteredCount).toBeGreaterThan(0);
  //     expect(filteredCount).toBeLessThanOrEqual(allProductsCount);
  //   }

  //   // Return to all products
  //   await page.click('[data-testid="category-select"]');
  //   await page.waitForSelector('.ant-select-dropdown', { state: 'visible' });
  //   await page.click('.ant-select-item-option:has-text("All")');
  //   await page.waitForTimeout(500);

  //   const finalCount = await page.locator('.productCard').count();
  //   expect(finalCount).toBe(allProductsCount);
  // });
});

