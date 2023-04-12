import { test,expect, Page } from '@playwright/test';


let page:Page;
test.beforeAll(async ({ browser }) => {
   
  page=  await browser.newPage();
    await page.goto("https://bugs.chromium.org/p/chromium/issues/list");
});

test("Handle Shadow DOM Input Box",async()=>{

               const searchinputbox=  page.locator("#searchq");
        await  searchinputbox.fill("Google Chrome");
        await page.waitForTimeout(3000);
});

test("Handle Shadow DOM Drop Down values",async()=>{

     const dropdown=  page.locator("#can");
    await dropdown.selectOption("New issues");
    await page.waitForTimeout(3000);
});