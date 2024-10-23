
const admin = require('../config/firebaseConfig');
const { createUser, getUserbyEmail, storeOtp, verifyOtp, updatePassword } = require('../models/user.model');
const { generateOtp, sendOtpEmail } = require('../utils/otpUtils');

// Signup Logic
const signup = async (req, res) => {
  // Signup logic
};

// Login Logic
const login = async (req, res) => {
  // Login logic
};

// Send OTP Logic
const sendOtp = async (req, res) => {
  // Send OTP logic
};

// Verify OTP Logic
const verifyOtp = async (req, res) => {
  // Verify OTP logic
};

// Reset Password Logic
const resetPassword = async (req, res) => {
  // Reset password logic
};

module.exports = {
  signup,
  login,
  sendOtp,
  verifyOtp,
  resetPassword,
};

