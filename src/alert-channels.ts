import {
    EmailAlertChannel,
    SlackAlertChannel,
    SmsAlertChannel,
} from "checkly/constructs";

// Configure alert settings for all alert channels
const sendDefaults = {
    sendFailure: true, // send alerts on failure
    sendRecovery: true, // send alerts when a check recovers from failing or being degraded
    sendDegraded: true, // send alerts when checks are slow, but not failing
    sslExpiry: true, // send alerts when SSL/TLS certificates expire
    sslExpiryThreshold: 30, // how many days before a certificate expires to send a notification
};

export const emailChannel = new EmailAlertChannel("email-channel-1", {
    address: "alerts@example.com",
    ...sendDefaults,
});

// Here are additional examples of alert channels you can create:

/* export const slackChannel = new SlackAlertChannel("slack-channel-1", {
    url: new URL("https://hooks.slack.com/services/..."),
    channel: "#ops",
    ...sendDefaults,
}); */

/* export const smsChannel = new SmsAlertChannel("sms-channel-1", {
    phoneNumber: "+1234567890",
    ...sendDefaults,
}); */

// See https://www.checklyhq.com/docs/alerting-and-retries/alert-channels/ for a full list of available alert channels.
