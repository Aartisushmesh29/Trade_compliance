import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Support from "./pages/Support";
import Product from "./pages/Product";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HSView from './pages/hsComp';
import Profile from "./components/Profile/Profile_With_SIdenavbar";
import TandC from "./pages/TermsAndConditions";

const App = () => {
  // State to handle theme (dark or light)
  const [theme, setTheme] = useState("dark");

  // Check localStorage for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Apply the theme to the body tag
  useEffect(() => {
    document.body.className = theme; // Add the class 'dark' or 'light' to the body
  }, [theme]);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      } transition-all duration-500 ease-in-out`}
    >
      <Router>
        {/* Pass theme and toggleTheme to the Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="">
          <Routes>
            {/* Pass the theme prop to the pages */}
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/pricing" element={<Pricing theme={theme} />} />
            <Route path="/docs" element={<Docs theme={theme} />} />
            <Route path="/support" element={<Support theme={theme} />} />
            <Route path="/product" element={<Product theme={theme} />} />
            <Route path="/login" element={<Login theme={theme} />} />
            <Route path="/signup" element={<SignUp theme={theme} />} />
            <Route path="/hs" element={<HSView theme={theme} />} />
            <Route path="/profile" element={<Profile theme={theme} />} />
            <Route path="/TermsAndConditions" element={<TandC theme={theme} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
