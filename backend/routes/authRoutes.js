const express = require('express');
const admin = require('../config/firebaseConfig');
const { createUser, getUserByEmail, storeOtp, verifyOtp, updatePassword } = require('../models/user.model');
const { generateOtp, sendOtpEmail } = require('../utils/otpUtils'); // OTP utility functions

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { email, password, name, phone, country } = req.body;
  console.log('Incoming data:', req.body);
  try {
    // Create user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    // Insert user details into Firestore
    await createUser(userRecord.uid, email, name, password, phone, country);

    res.status(201).json({ message: 'User created successfully', uid: userRecord.uid });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(400).json({ error: error.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user from Firestore by email
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Check if the password matches
    if (password !== user.password) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Generate Firebase custom token using the Firebase UID from Firestore
    const token = await admin.auth().createCustomToken(user.firebase_uid);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: error.message });
  }
});

// Send OTP for password reset
router.post('/forgot-password/send-otp', async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user exists
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Generate OTP
    const otp = generateOtp();

    // Store OTP in Firestore
    await storeOtp(user.firebase_uid, otp);

    // Send OTP to the user's email
    await sendOtpEmail(email, otp);

    res.status(200).json({ message: 'OTP sent to your email.' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: error.message });
  }
});

// Verify OTP
router.post('/forgot-password/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Check if user exists
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Verify OTP
    const isVerified = await verifyOtp(user.firebase_uid, otp);
    if (!isVerified) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    res.status(200).json({ message: 'OTP verified. You can reset your password now.' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: error.message });
  }
});

// Reset Password
router.post('/forgot-password/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Check if user exists
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Update password in Firestore
    await updatePassword(user.firebase_uid, newPassword);

    res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
