const express = require('express');
const { OAuth2Client } = require('google-auth-library'); // For Google Sign-in
const authApi = require('../controllers/authController')
const router = express.Router();
// Initialize Google OAuth2 Client with your client ID
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// Signup Route
router.post('/signup', authApi.signup);
// Google Sign-In Route
router.post('/google-signin', authApi.GoogleSignInSinghUp);
// After google signup page API route 
router.post('/user-phone-country', authApi.AfterGoogleSignUp);
// Login Route
router.post('/login', authApi.login);
// Send OTP for password reset route
router.post('/forgot-password/send-otp', authApi.sentOtp);
// Verify OTP route
router.post('/forgot-password/verify-otp' , authApi.verifyingOTP);
// Reset Password route
router.post('/forgot-password/reset-password', authApi.PasswordReset);
module.exports = router;
