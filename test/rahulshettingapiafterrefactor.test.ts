import { test,expect,request,Response} from '@playwright/test'
import { APIUtilsrahul } from '../APIUtils/APIUtilsrahul';

const loginpayload={userEmail:"venuuppari4b4@gmail.com",userPassword:"Vijay@123"};
const orderPayload= {orders:[{country: "Australia", productOrderedId: "6262e990e26b7e1a10e89bfa"}]};
let apicontext;
let response;

test.beforeAll(async()=>{

  apicontext=  await request.newContext();
 const apiutils= new APIUtilsrahul(apicontext,loginpayload);
 response = await apiutils.CreateOrder(orderPayload);  
});



test(" API Testing along with UI test cases ", async({page})=>{

    page.addInitScript(value=>{
        window.localStorage.setItem("token",value);
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client/");
    const homepage = page.locator("//button[normalize-space()='HOME']");
    console.log("Home page Landing verification " + await homepage.textContent());
    expect(await homepage.textContent()).toContain("HOME");


    // Validate order ID using web UI
    // Click on Orders
    await page.locator("text=  ORDERS").click();
    const orderspge =await page.locator("text=Your Orders").textContent();
    expect(orderspge).toContain("Your Orders");
    await page.locator("tbody").waitFor();

    const rows = page.locator("tbody tr");
    console.log("Number of rows in table are " + await rows.count());
    for(let i=0;i< await rows.count();i++){
       const exptracking= await rows.nth(i).locator("th").textContent();
       if(response.orderID.includes(exptracking)){
        await rows.nth(i).locator("button").first().click();
        break;
       }
    }

   const orderidfromorders= await page.locator(".col-text.-main").textContent();
    expect(response.orderID.includes(orderidfromorders));
    console.log("Order ID Validated in Create Order test "  + response.orderID);
})