import { expect, test } from "@playwright/test";

test("Taking screenshot", async({page}) => {
    

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").type("venuuppari4b4@gmail.com");
    await page.locator("#userPassword").type("Vijay@123");
    await page.locator("#login").click();
    await page.waitForLoadState();
    await page.screenshot({path:"fullpage.png"});
    
});

test("Parially Taking screenshot", async({page}) => {
    
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").type("venuuppari4b4@gmail.com");
    await page.locator("#userEmail").screenshot({path:"partiallocator.png"});
    await page.locator("#userPassword").type("Vijay@123");
    await page.locator("#login").click();
    await page.waitForLoadState();
    await page.screenshot({path:"fullpage.png"});
    
});

test.only("Visual Comparision", async({page}) => {
    
    await page.goto("https://rahulshettyacademy.com/client");
    expect(await page.screenshot()).toMatchSnapshot("google.png");
    
});