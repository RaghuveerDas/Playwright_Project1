import { test, expect } from '@playwright/test';

test('Practise_16Jan', async ({page}) => {
    await page.goto("https://www.google.com");
    const pageTitle = await page.title();
    console.log('The page title is', pageTitle);
});