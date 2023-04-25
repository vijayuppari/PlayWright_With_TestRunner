import { expect,request } from "@playwright/test";


export class APIUtilsrahul{
    apicontext: any;
    loginpayload: any;
    
    
    constructor(apicontext,loginpayload){
        this.apicontext=apicontext;
        this.loginpayload=loginpayload;
    }
async getToken(){

    
    const loginresponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
       data: this.loginpayload
   }
    )
     expect (loginresponse.ok()).toBeTruthy();
     const loginreponsejson = await loginresponse.json();
     const token = loginreponsejson.token;
     const message = loginreponsejson.message;
     console.log("Token value as " + token);
     console.log("After login message as  " + message);
     return token;
}

async CreateOrder(orderPayload:any){

    let response:any = {};
    response.token= await this.getToken();
    const placeorderresponse= await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data:orderPayload,
        headers:{
            'Authorization':response.token,
            'Content-Type':'application/json'
        }
    })

  const placeorderresponsejson=  await placeorderresponse.json();
  const orderID= await placeorderresponsejson.orders[0];
  response.orderID= orderID;
  console.log("Order ID generated in API Utils "  + response.orderID);
  return response;
}




}