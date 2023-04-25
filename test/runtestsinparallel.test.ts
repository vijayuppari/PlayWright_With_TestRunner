import { test } from "@playwright/test";


test.describe.configure({
    mode: 'parallel',

});
test('Test Case1', async({page}) => {
    console.log("Executing test case 1");
});

test('Test Case2', async({page}) => {
    console.log("Executing test case 2");
});

test('Test Case3', async({page}) => {
    console.log("Executing test case 3");  
});