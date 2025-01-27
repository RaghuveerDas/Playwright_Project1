const {test, expect} = require('@playwright/test');

test('Teature1', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const pageTitle = await page.title();
    console.log('The page title is', pageTitle);

    await expect(page).toHaveTitle('Swag Labs');

    const pageURL = page.url();
    console.log('The page URL is', pageURL);
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.close();
})