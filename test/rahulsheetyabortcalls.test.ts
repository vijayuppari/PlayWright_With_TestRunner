import { test } from "@playwright/test";


test("Abort CSS and JPG Calls", async({page}) => {

    await page.route("**/*.css",route=>route.abort());
    await page.route("**/*.{jpg,png,jpeg}",route=>route.abort());
    page.on("request",request=>console.log(request.url()));
    page.on("response",response=>console.log(response.url() + " " + response.status()));
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").type("venuuppari4b4@gmail.com");
    await page.locator("#userPassword").type("Vijay@123");
    await page.locator("#login").click();
    await page.waitForLoadState();
    await page.pause();



});