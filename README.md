# Cloud Function for Email Trigger

This solution demonstrates how to trigger an email by clicking a button on a simple webpage using Google Cloud Functions and SendGrid.

## Prerequisites

- [Google Cloud Platform (GCP) Account](https://console.cloud.google.com/)
- [SendGrid Account](https://sendgrid.com/)
- [Node.js](https://nodejs.org/) installed locally

## Setup Instructions

1. **Create a Google Cloud Function:**

    - Go to the [Google Cloud Console](https://console.cloud.google.com/).
    - Navigate to the Cloud Functions section.
    - Click "Create Function" to create a new function.
    - Configure the function with the desired settings (HTTP trigger, runtime, etc.).
    - In the "Source code" section, paste the contents of `index.js` (your Cloud Function code).
    - Deploy the function.

2. **Set up SendGrid:**

    - Sign up for a SendGrid account.
    - Obtain an API key from SendGrid.

3. **Configure Cloud Function Environment Variables:**

    - Set the SendGrid API key as an environment variable for your Cloud Function.

4. **Deploy the Web Page:**

    - Create an HTML file with a button that triggers the Cloud Function.
    - Host the HTML file on a web server or Google Cloud Storage.

5. **Update Cloud Function Code:**

    - Ensure that the Cloud Function code includes proper CORS headers if needed.(Optional)

6. **Deploy the Web Page:**

    - If you use Google Cloud Storage, upload your HTML file to a bucket and make it publicly accessible.
    - If you use another hosting solution, deploy your HTML file accordingly.

## Usage

- Open the deployed web page.
- Click the button to trigger the Cloud Function, which sends an email through SendGrid.

## ScreenShorts
![s](https://github.com/ShashwatRoyIT/Cloud_Function_EmailSender/assets/63514592/5f465f47-2eac-4b27-aff3-eb9fc8adabc3)

![ss](https://github.com/ShashwatRoyIT/Cloud_Function_EmailSender/assets/63514592/c1c5d04c-6a2f-4d27-97f8-8af2ac7e0a4b)


![sss](https://github.com/ShashwatRoyIT/Cloud_Function_EmailSender/assets/63514592/926369a5-64ad-4410-86ae-43b34eea7bc9)

