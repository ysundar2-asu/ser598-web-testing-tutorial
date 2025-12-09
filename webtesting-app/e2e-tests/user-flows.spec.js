const { test, expect } = require('@playwright/test');

test.describe('E-Commerce User Flows - Complete Scenarios', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('text=Demo - ECommerce Website');
    await page.waitForSelector('.productCard', { timeout: 15000 });
  });


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

});

