
import {test,expect} from "@playwright/test";


test("Login test using TestRunner", async ({page})=>{

    await page.goto("https://letcode.in/");
    await page.waitForLoadState();
    //expect(page).toHaveURL("https://letcode.in/");
    await page.click("//a[normalize-space()='Log in']");
    await page.waitForLoadState();

    // const capturetext =  await page.locator("//*[@class='subtitle is-4 has-margin-top-20 is-family-primary']").textContent();
    // console.log("Text is ........................" + capturetext);
    
   const usernameinput =  page.locator("//input[@name='email']");
    await usernameinput.fill("venuuppari4b4@gmail.com");
    const password= page.locator("//input[@placeholder='Enter password']");
    await password.type("Vijay@123",{delay:100});

   const loginbutton= page.locator("//button[normalize-space()='LOGIN']");
     await  loginbutton.click();  
    await page.click("//a[normalize-space()='Sign out']");

});

test.skip("Handle Dropdowns",async({page}) => {
    await page.goto("https://letcode.in/dropdowns");
    const fruitsdropdown=  await page.$("//select[@id='fruits']");
   await fruitsdropdown?.selectOption("2");
   const fruit =await page.$("//div[@class='notification is-success']");
   if(fruit){
     expect(await fruit.textContent()).toContain("Orange");
   }
  }); 

  test("Handle Dropdowns Tags @smoke",async({page}) => {
    await page.goto("https://letcode.in/dropdowns");
    const fruitsdropdown=  await page.$("//select[@id='fruits']");
   await fruitsdropdown?.selectOption("2");
   const fruit =await page.$("//div[@class='notification is-success']");
   if(fruit){
     expect(await fruit.textContent()).toContain("Orange");
   }
  }); 

  