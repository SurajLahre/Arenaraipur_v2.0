const nodemailer = require('nodemailer');
const SendEmail = async ({ name, email, message }) => {
  // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'lahre.suraj0707@gmail.com', // Your email address
      pass: 'F3526603CE81688D118A8A4704B24F95B70F' // Your email password
    }
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: email,
      to: 'surajlahre0707@gmail.com', // The recipient email address
      subject: `Message from ${name}`,
      text: message
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default SendEmail;
