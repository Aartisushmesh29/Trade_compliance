const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Generate a random 6-digit OTP
const generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Send OTP via email
const sendOtpEmail = (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for Password Reset',
    text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
  };

  return transporter.sendMail(mailOptions);
};

// Exporting all the controllers
module.exports = {
  generateOtp,
  sendOtpEmail,
};
