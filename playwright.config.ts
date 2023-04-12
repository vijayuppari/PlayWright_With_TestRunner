import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {

    use:{
        headless: false,
        channel : "chrome",
        screenshot: "only-on-failure"
    },
    retries: 0,
    reporter:[["dot"],["html"],["json",{outputFile:"test-result.json"}]]
}
export default config;
