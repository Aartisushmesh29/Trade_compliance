const admin = require('../config/firebaseConfig');
const db = admin.firestore(); // Firestore instance

// Create user function
const createUser = async (uid, email, name, password, phone, country) => {
  try {
    await db.collection('users').doc(uid).set({
      email,
      name,
      password,
      phone,
      country,
      is_active: true,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
      updated_at: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log('User inserted into Firestore');
  } catch (error) {
    console.error('Error inserting user into Firestore:', error);
    throw error;
  }
};

// Get user by email function
const getUserByEmail = async (email) => {
  try {
    const userSnapshot = await db.collection('users').where('email', '==', email).get();
    if (userSnapshot.empty) {
      return null;
    }
    const userData = userSnapshot.docs[0].data();
    return { ...userData, firebase_uid: userSnapshot.docs[0].id }; // Add UID to user data
  } catch (error) {
    console.error('Error fetching user from Firestore:', error);
    throw error;
  }
};

// Store OTP function
const storeOtp = async (uid, otp) => {
  const expirationTime = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes
  try {
    await db.collection('otps').doc(uid).set({
      otp,
      expires_at: expirationTime,
    });
    console.log('OTP stored in Firestore');
  } catch (error) {
    console.error('Error storing OTP in Firestore:', error);
    throw error;
  }
};

// Verify OTP function
const verifyOtp = async (uid, otp) => {
  try {
    const otpDoc = await db.collection('otps').doc(uid).get();
    if (!otpDoc.exists) {
      return false;
    }
    const otpData = otpDoc.data();
    return otpData.otp === otp && otpData.expires_at.toDate() > new Date();
  } catch (error) {
    console.error('Error verifying OTP in Firestore:', error);
    throw error;
  }
};

// Update password function
const updatePassword = async (uid, newPassword) => {
  try {
    await db.collection('users').doc(uid).update({
      password: newPassword,
      updated_at: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Password updated in Firestore');
  } catch (error) {
    console.error('Error updating password in Firestore:', error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  storeOtp,
  verifyOtp,
  updatePassword,
};
