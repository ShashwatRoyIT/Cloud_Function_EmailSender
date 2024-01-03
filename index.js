const functions = require("@google-cloud/functions-framework");

const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey("SENDGRID_API_KEY"); //Authenticate SendGrid with Sender Email Account

functions.http("emailSend", (req, res) => {
  // res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);

  const msg = {
    to: "reciverEmail@gmail.com",
    from: "senderEmail@gmail.com",
    subject: "Sample Email For learning google cloud functions",
    html: "<strong>Jai Shree Ram..I am Shashwat Roy. This function is triggered by Google Cloud Functions on clicking a button on web page.</strong>",
  };

  var message = "Shashwat's Function sent ";
  sendgrid
    .send(msg)
    .then((res) => {
      message += "Mail sent successfully , Status Code: " + res[0].statusCode; // if response is 202 , this implies mail is successfully sent
    })
    .catch((err) => {
      message += "Error aa gya bhai";
    });

  res.send(message);
});
