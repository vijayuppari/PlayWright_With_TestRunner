import { test,expect} from '@playwright/test';


test("Visual Comparision in Letcode",async({page})=>{

   await page.goto("https://letcode.in/");
   expect(await page.screenshot({
    fullPage:true
    })).toMatchSnapshot('letcode.png');
});