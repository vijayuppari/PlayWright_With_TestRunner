import { Commonpage } from './../../Pages/commonpage';
import { LoginPage } from './../../Pages/loginpage';
import { ENV } from './../../Utils/environment';
import { test,expect, Page } from '@playwright/test';
import { Header } from '../../Pages/headerpage';
import * as data from "../../data/logintestdata.json";

test. describe('Login Functionality', () => {

        let header: Header;
        let login: LoginPage;
        let common: Commonpage;
        let page: Page;
    
    test.beforeAll(async ({ browser }) => {
    
      page = await browser.newPage();
   
      header = new Header(page);
      login = new LoginPage(page);
      common = new Commonpage(page);
    });

    test.beforeEach(async () => {
      await page.goto(ENV.test);
    });
        
    test('login with valid credentials', async () => {
          
          await page.waitForLoadState();
          await header.clickloginbutton();
          await login.LogintoApp("venuuppari4b4@gmail.com","Vijay@123",page);
        
        // Capture the Toast message

      const captoaster= await common.toaster();
      expect(await captoaster?.textContent()).toContain("Welcome");
    
      await header.clicklogoutbutton();

    });
    test('login with valid credentials using Json data', async () => {
        await page.waitForLoadState();
        await header.clickloginbutton();
        await login.LogintoApp(data.username,data.password,page);
      
      // Capture the Toast message

    const captoaster= await common.toaster();
    expect(await captoaster?.textContent()).toContain("Welcome");
  
    await header.clicklogoutbutton();

  });
});