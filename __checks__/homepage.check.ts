import { BrowserCheck, Frequency } from "checkly/constructs";
import { emailChannel } from "../src/alert-channels";

// Create a Browser Check to set up alerts for Playwright tests
new BrowserCheck("browser-check-1", {
    alertChannels: [emailChannel], // add your alert channels here
    name: "Browser check #1",
    frequency: Frequency.EVERY_12H,
    locations: ["us-east-1", "eu-west-1"],
    code: {
        entrypoint: "./homepage.spec.ts", // location of your Playwright test
    },
});
