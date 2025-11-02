import { test, expect, Page } from '@playwright/test';

test.describe('Search functionality for RTX 4060 laptops', () => {
  const baseURL: string = 'http://localhost:3002/';
  const searchQuery: string = 'RTX 4060';

  test('Search and verify results and product pages', async ({ page }: { page: Page }) => {
    
    await page.goto(baseURL);
    await expect(page).toHaveURL(baseURL);


    const searchBar = page.locator('[data-testid="Search"]')
    await expect(searchBar).toBeVisible();
    // await page.scrollTo(searchBar)
    
    // Step 3: Type "RTX 4060"
    // await searchBar.fill(searchQuery);

    // Step 4: Verify all results contain "RTX 4060" in name
    // const resultCards = page.locator('[data-testid="product-card"]');
    // const count: number = await resultCards.count();
    // expect(count).toBeGreaterThan(0);

    // const resultLinks: string[] = [];

    // for (let i = 0; i < count; i++) {
    //   const card = resultCards.nth(i);

    //   // Get product title text
    //   const title: string | null = await card.locator('.product-title').textContent();
    //   expect(title).not.toBeNull();
    //   expect(title!).toContain('RTX 4060');

    //   // Step 5: Save each link
    //   const link: string | null = await card.locator('a').getAttribute('href');
    //   expect(link).not.toBeNull();
    //   resultLinks.push(link!);
    // }

    // // Step 6–8: Verify each product page matches its card title
    // for (const link of resultLinks) {
    //   await page.goto(`${baseURL}${link}`);

    //   const productTitle: string | null = await page.locator('.product-title').textContent();
    //   expect(productTitle).not.toBeNull();
    //   expect(productTitle!).toContain('RTX 4060');
    // }
  });
});
