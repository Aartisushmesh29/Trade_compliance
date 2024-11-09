import axios from "axios";

const API_URL = "https://trade-compliance.vercel.app/api/auth";

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Error while signing up", error);
    throw error;
  }
};
export const googleSignIn = async (googleToken) => {
  try {
    const response = await axios.post(`${API_URL}/google-signin`, {
      token: googleToken,
    });
    return response;
  } catch (error) {
    console.error("Error while signing in with Google", error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
