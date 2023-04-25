import {test} from '@playwright/test'

let BrowserContext;

test.skip("Test Cookies by default Login with OrangeHRM Application",async ({browser}) => {
    const context= await browser.newContext({
            storageState: "./test/auth.json"
        })

    const page=  await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000);
})

test("Capture all Cookies in different way for RahulShetty Application",async ({browser}) => {
    const context= await browser.newContext();
    const page=  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").type("venuuppari4b4@gmail.com");
    await page.locator("#userPassword").type("Vijay@123");
    await page.locator("#login").click();
    await page.waitForLoadState();
    await context.storageState({path: "rahul.json"});
    BrowserContext=  await browser.newContext({storageState: "rahul.json"});
})

test("Login Rahul Application with using Storage", async () => {

    const page = await BrowserContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.waitForTimeout(3000);
});

