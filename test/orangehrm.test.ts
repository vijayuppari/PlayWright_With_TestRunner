import { test,expect } from '@playwright/test';

test("Orange HRM Login", async({page})=>{

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.waitForLoadState()
       const username= page.locator("//input[@placeholder='Username']");
       const password= page.locator("//input[@placeholder='Password']");
       const loginbutton= page.locator("//*[@type='submit']");

       await username.fill("Admin");
       await password.fill("admin1234");
       await loginbutton.click();

       const errormessage= page.locator("//*[@class='oxd-alert oxd-alert--error']");
       console.log("Error message:.......... " + await errormessage.textContent());
       expect(await errormessage.textContent()).toBe("Invalid credentials");
       

});