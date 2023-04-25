import {test} from '@playwright/test'

test("Test Cookies by default Login with Rahulshetty Application",async ({browser}) => {


    const context= await browser.newContext({
            storageState: "./test/auth1.json"
        })

    const page=  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.waitForTimeout(5000);
})



