import { test,expect,request,Response} from '@playwright/test'

const loginpayload={userEmail:"venuuppari4b4@gmail.com",userPassword:"Vijay@123"};
const orderPayload= {orders:[{country: "Australia", productOrderedId: "6262e990e26b7e1a10e89bfa"}]};
let token:any;
let orderID:any;

test.beforeAll(async()=>{


// Login using API Call
 const apicontext=  await request.newContext();
 const loginresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
 {
    data: loginpayload
}
 )
  expect (loginresponse.ok()).toBeTruthy();
  const loginreponsejson = await loginresponse.json();
   token = loginreponsejson.token;
  const message = loginreponsejson.message;
  console.log("Token value as " + token);
  console.log("After login message as  " + message);

  // Place order using API Call

  const placeorderresponse= await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data:orderPayload,
        headers:{
            'Authorization':token,
            'Content-Type':'application/json'
        }
    })

  const placeorderresponsejson=  await placeorderresponse.json();
  orderID= await placeorderresponsejson.orders[0];
  console.log("Order ID created using API Call " + orderID);
  
});



test(" API Testing along with UI test cases ", async({page})=>{

    page.addInitScript(value=>{
        window.localStorage.setItem("token",value);
    }, token);
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
       if(orderID.includes(exptracking)){
        await rows.nth(i).locator("button").first().click();
        break;
       }
    }

   const orderidfromorders= await page.locator(".col-text.-main").textContent();
    expect(orderID.includes(orderidfromorders))

    await page.pause();



    // Select item and add to cart

//     const totalitems = page.locator("//*[@class='card-body']");
//     const totalprods=  await totalitems.count();
//     console.log("Total number of items in the Dashboard " + await totalitems.count());

//    for (let i = 0; i < totalprods; i++) {
    
//      if( await totalitems.nth(i).locator("b").textContent()===("adidas original")){
//         await totalitems.nth(i).locator("text= Add To Cart").click();
//         break;
//      }
//    }

//    // Naivigate to My Cart Page
//    await page.locator("//*[@routerlink='/dashboard/cart']").click();
//    const mycarttext =await page.locator("text=My Cart").textContent();
//    expect(mycarttext).toContain("My Cart");
//    console.log("Navigated to My Cart page successfully");
   
//    // Click on Checkout button in My Cart page
//    await page.locator("text=Checkout").click();

//    // Verify the Payment Page
//    const paymenttext =await page.locator("text=Payment Method").textContent();
//    expect(paymenttext).toContain("Payment Method");
//    console.log("Landed in Payment Method page successfully");

//    // Select Country
//   const country= page.getByPlaceholder("Select Country");
//    await country.click();
//    await country.type("INDIA");
//    await page.waitForTimeout(2000);
//    const totalcountries = page.locator("ta-results list-group ng-star-inserted");
//    const totalcountriescount = await totalcountries.count();
//    for(let j=0;j<totalcountriescount;j++) {
//        const countrynameloca=  totalcountries.nth(j).locator("//button[@class='ta-item list-group-item ng-star-inserted']//span");
//        const countryname =await countrynameloca.textContent();
//         if(countryname===" India"){
//             countrynameloca.click();
//             break;
//         }
//    }


   // Create Order using API call

  
})