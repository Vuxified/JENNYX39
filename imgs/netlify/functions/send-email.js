const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    // Parse the form data from the request body
    const { user_name, user_email, message } = JSON.parse(event.body);

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: "yahoo", // Use "gmail", "outlook", "yahoo", etc.
        auth: {
            user: "jeane.matthews@yahoo.com", // Your email address
            pass: "patchup4life", // Your email password or app password
        },
    });
    

    const mailOptions = {
      from: user_email, // Sender's email
      to: "jeane.matthews@yahoo.com", // Receiver's email
      subject: `New Message from ${user_name}`,
      text: `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email", error: error.message }),
    };
  }
};
