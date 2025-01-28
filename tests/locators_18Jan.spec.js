import {test, expect} from '@playwright/test';

test('Locators on the header', async ({page}) => {

//  to valiate the elemets are visible.    

    await page.goto('https://ultimateqa.com/consulting/');
    await page.waitForSelector("//header[@class='et-l et-l--header']");
    await page.isVisible("//header[@class='et-l et-l--header']");

    await page.waitForSelector("//div[@id='main-menu']/div/div/div/a/img");
    await page.isVisible("//div[@id='main-menu']/div/div/div/a/img");

    await page.isVisible("//nav[@class ='et-menu-nav']/ul[@id='menu-main-menu']/li[1]/a");
    await page.isVisible("//nav[@class ='et-menu-nav']/ul[@id='menu-main-menu']/li[2]/a");
    await page.isVisible("//nav[@class ='et-menu-nav']/ul[@id='menu-main-menu']/li[3]/a");
    await page.isVisible("//nav[@class ='et-menu-nav']/ul[@id='menu-main-menu']/li[4]/a");
    await page.isVisible("//nav[@class ='et-menu-nav']/ul[@id='menu-main-menu']/li[5]/a");

    console.log('The header elements are visible');

})