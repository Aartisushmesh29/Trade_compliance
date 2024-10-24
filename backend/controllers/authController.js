
const admin = require('../config/firebaseConfig');
const UserAPI = require('../models/user.model');
const {  generateOtp,sendOtpEmail } = require('../utils/otpUtils');

module.exports = {

  // SignUP using email , password and other user's credentials API
   signup : async(req,res)=>{
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
    await UserAPI.createUser(userRecord.uid, email, name, password, phone, country);

    res.status(201).json({ message: 'User created successfully', uid: userRecord.uid });
   } catch (error) {
    console.error('Error during signup:', error);
    res.status(400).json({ error: error.message });
   }
 },

 // Google signup page API  
  GoogleSignInSinghUp : async(req, res) => {
    const { token } = req.body;

    try {
      // Verify Google token
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
  
      const payload = ticket.getPayload();
      const { email, name, sub: googleUid } = payload;
  
      // Check if user already exists in Firestore
      const user = await UserAPI.getUserByEmail(email);
  
      if (!user) {
        // If user doesn't exist, create a new user in Firestore
        await UserAPI.createUser(googleUid, email, name, null, null, null);
  
        res.status(201).json({ message: 'Google user registered successfully', googleUid });
      } else {
        // If user exists, just log them in
        res.status(200).json({ message: 'Login successful', googleUid });
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      res.status(400).json({ error: error.message });
    }
  

  },
// After google signup page API  --> storing user's phone, country .
  AfterGoogleSignUp : async(req,res) =>{
    const { email, newPhone, newCountry } = req.body;

    try {
      // Check if user exists
      const user = await UserAPI.getUserByEmail(email);
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      // Update phone and country
      const params = {newPhone, newCountry}
      await UserAPI.updateuserCredentials(user.firebase_uid , params);
  
      res.status(200).json({ message: 'Phone and Country reset successfully.' });
    } catch (error) {
      console.error('Error resetting Phone and Country:', error);
      res.status(500).json({ error: error.message });
    }
  },

  // Login API Logic
 login : async (req, res) =>  {
  const { email, password } = req.body;

  try {
    // Fetch user from Firestore by email
    const user = await UserAPI.getUserByEmail(email);

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
},

// Send OTP for password reset
sentOtp : async(req ,res) => {
  
  const { email } = req.body;

  try {
    // Check if user exists
    const user = await UserAPI.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Generate OTP
    const otp = generateOtp();

    // Store OTP in Firestore
    await UserAPI.storeOtp(user.firebase_uid, otp);

    // Send OTP to the user's email
    await sendOtpEmail(email, otp);

    res.status(200).json({ message: 'OTP sent to your email.' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: error.message });
  }
},

// Verify OTP API
verifyingOTP : async(req,res) =>{
  const { email, otp } = req.body;

  try {
    // Check if user exists
    const user = await UserAPI.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Verify OTP
    const isVerified = await UserAPI.verifyOtp(user.firebase_uid, otp);
    if (!isVerified) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    res.status(200).json({ message: 'OTP verified. You can reset your password now.' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: error.message });
  }
},

// Reset Password
PasswordReset : async(req,res)=>{
  const { email, newPassword } = req.body;

  try {
    // Check if user exists
    const user = await UserAPI.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    
    // Update password in Firestore
    await UserAPI.updatePassword(user.firebase_uid, newPassword);

    res.status(200).json({ 
      message: 'Password reset successfully.' 
    });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: error.message });
  }
}

};

