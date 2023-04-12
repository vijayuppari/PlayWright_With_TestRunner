import {test} from '@playwright/test'

test("Test Cookies by default Login with OrangeHRM Application",async ({browser}) => {


    const context= await browser.newContext({
            storageState: "./test/auth.json"
        })

    const page=  await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000);
})



