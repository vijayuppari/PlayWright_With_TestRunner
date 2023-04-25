import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {

    use:{
        headless: false,
        channel : "chrome",
        screenshot: "only-on-failure",
        trace:"on",
        video: "off",
    },
    retries: 0,
    fullyParallel:true,
    reporter:[["dot"],["html"],["json",{outputFile:"test-result.json"}],["allure-playwright"]]
}
export default config;
