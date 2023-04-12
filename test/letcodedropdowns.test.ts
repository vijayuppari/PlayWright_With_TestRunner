import { test,expect, Page } from '@playwright/test';


test.describe("Dropdown Suite", async() => {

    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page=  await browser.newPage();
        await page.goto("https://letcode.in/dropdowns");
        await page. waitForLoadState();
        
    });
    

test("Handle Multi Dropdowns",async() => {
 const heros=   await page.$("//select[@id='superheros']");
  heros?.selectOption([
   {label: "Aquaman"}, {value: "bt"},{index:7}
  ])
 }); 

 test("Count of the Select drop down", async()=>{

  await page.goto("https://letcode.in/dropdowns");
   const lang = await page.$$("//select[@id='lang']");
   console.log("Total number of options in the drop down " + lang.length);
 
 });

 test("Capture the text from dropdown", async()=>{
  await page.goto("https://letcode.in/dropdowns");
   const selectcuntry =await page.selectOption("//select[@id='country']","India");
   
   const country =  await page.$eval<string,HTMLSelectElement>("//select[@id='country']",ele=>ele.value);
   console.log("Captured text from drop down " + country);
   expect(country).toBe("India");
 
 });

});