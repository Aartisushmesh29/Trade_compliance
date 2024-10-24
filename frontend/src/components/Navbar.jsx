import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import burger from "../assets/burger.png";
import cross from "../assets/cross.png";
import darklogo from "../assets/logodarkbg.png";
import moon from "../assets/moonn.png";
import sun from "../assets/brightness (1).png";

const Navbar = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [url, seturl] = useState("");

  const location = useLocation();

  const routsArray = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Docs", path: "/docs" },
    { name: "Support", path: "/support" },
    { name: "Product", path: "/product" },
    { name: "Profile", path: "/profile" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    seturl(window.location.pathname);
  }, [location]);

  return (
    <nav
      className={`flex fixed w-full  ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      } justify-between items-center ${
        url == "/login" || url == "/signup" ? "border-none" : "border-b"
      } p-4 px-6 lg:px-16 z-50`}
    >
      {/* Logo */}
      <div className="nav_logo_name">
        <Link to="/">
          <img
            src={theme === "light" ? logo : darklogo}
            alt="Logo"
            className="h-[18px] lg:h-8"
          />
        </Link>
      </div>

      {/* Full Navigation for larger screens */}
      <div
        className={`${
          url == "/login" || url == "/signup" ? "lg:hidden" : "lg:flex"
        } hidden space-x-6`}
      >
        {routsArray.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className={`${
              url == route.path ? "text-blue-500" : ""
            } hover:bg-[#E3EBFD] dark:hover:bg-gray-700 transition-all duration-200 hover:text-blue-500 rounded-lg py-1 px-2`}
          >
            {route.name}
          </Link>
        ))}
      </div>

      {/* Theme Toggle Button */}
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="mr-4 p-2 rounded-lg hover:bg-[#E3EBFD]"
        >
          <img
            src={theme === "light" ? moon : sun}
            alt={theme === "light" ? "Dark Mode" : "Light Mode"}
            className="h-6"
          />
        </button>

        {/* Login Button */}
        <div
          className={`${
            url === "/login" || url === "/signup" ? "lg:hidden" : "lg:flex"
          } hidden lg:block `}
        >
          <Link
            to="/login"
            onClick={toggleMobileMenu}
            className="w-full flex justify-center items-center"
          >
            <button className="bg-[#407BFF] hover:bg-blue-400 text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden p-1 hover:bg-[#E3EBFD] rounded-md">
          <button onClick={toggleMobileMenu}>
            <img
              src={isMobileMenuOpen ? cross : burger}
              alt="Menu Toggle"
              className="h-4"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-screen ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        } z-10 lg:hidden`}
      >
        <div className="flex justify-between items-center p-4 px-6">
          {/* Logo */}
          <Link to="/">
            <img
              src={theme === "light" ? logo : darklogo}
              alt="Logo"
              className="h-4"
            />
          </Link>

          {/* Close Icon */}
          <div className="hover:bg-[#E3EBFD] rounded-md p-1">
            <button onClick={toggleMobileMenu}>
              <img src={cross} alt="Close Menu" className="h-4 " />
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-start  space-y-4 ">
          <hr className="bg-black w-full" />
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="ml-6 text-balance text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/pricing"
            onClick={toggleMobileMenu}
            className="ml-4 w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] hover:text-blue-500 rounded-lg"
          >
            Pricing
          </Link>
          <Link
            to="/docs"
            onClick={toggleMobileMenu}
            className="ml-4  w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] hover:text-blue-500 rounded-lg"
          >
            Docs
          </Link>
          <Link
            to="/support"
            onClick={toggleMobileMenu}
            className="ml-4  w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] hover:text-blue-500 rounded-lg"
          >
            Support
          </Link>
          <Link
            to="/product"
            onClick={toggleMobileMenu}
            className="ml-4  w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] hover:text-blue-500 rounded-lg"
          >
            Product
          </Link>
          <Link
            to="/profile"
            onClick={toggleMobileMenu}
            className="ml-4  w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] hover:text-blue-500 rounded-lg"
          >
            Profile
          </Link>
          <Link
            to="/login"
            onClick={toggleMobileMenu}
            className=" w-full flex justify-center items-center px-4"
          >
            <button className="bg-[#407BFF] hover:bg-blue-400 text-white px-4 py-2 rounded-lg mt-4 w-full">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo.png";
// import burger from "../assets/burger.png";
// import cross from "../assets/cross.png";
// import darklogo from "../assets/logodarkbg.png";
// import moon from "../assets/moon.png";  // Icon for dark mode
// import sun from "../assets/brightness.png";   // Icon for light mode

// const Navbar = ({ theme, toggleTheme }) => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [url, setUrl] = useState(window.location.pathname);
//   const location = useLocation();

//   const routsArray = [
//     { name: "Home", path: "/" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "Docs", path: "/docs" },
//     { name: "Support", path: "/support" },
//     { name: "Calculate", path: "/calculate" },
//   ];

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav
//       className={`flex fixed w-full bg-white dark:bg-gray-800 justify-between items-center ${
//         url === "/login" || url === "/signup" ? "border-none" : "border-b"
//       } p-4 px-6 lg:px-16`}
//     >
//       {/* Logo */}
//       <div className="nav_logo_name">
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-[18px] lg:h-8" />
//         </Link>
//       </div>

//       {/* Full Navigation for larger screens */}
//       <div className={`${
//           url === "/login" || url === "/signup" ? "lg:hidden" : "lg:flex"
//         } hidden space-x-6`}
//       >
//         {routsArray.map((route, index) => (
//           <Link
//             key={index}
//             to={route.path}
//             className={`${
//               url === route.path ? "text-blue-500" : ""
//             } hover:bg-[#E3EBFD] rounded-lg py-1 px-2 dark:text-white`}
//           >
//             {route.name}
//           </Link>
//         ))}
//       </div>

//       {/* Dark/Light Mode Toggle */}
//       <div className="flex items-center">
//         <button onClick={toggleTheme} className="mr-4 focus:outline-none">
//           <img
//             src={theme === "light" ? moon : sun}
//             alt="Toggle Theme"
//             className="h-6"
//           />
//         </button>

//         {/* Login Button */}
//         <div
//           className={`${
//             url === "/login" || url === "/signup" ? "lg:hidden" : "lg:flex"
//           } hidden lg:block`}
//         >
//           <Link to="/login">
//             <button className="bg-[#407BFF] hover:bg-blue-400 text-white px-4 py-2 rounded">
//               Login
//             </button>
//           </Link>
//         </div>

//         {/* Hamburger menu for mobile */}
//         <div className="lg:hidden p-1 hover:bg-[#E3EBFD] rounded-md">
//           <button onClick={toggleMobileMenu}>
//             <img
//               src={isMobileMenuOpen ? cross : burger}
//               alt="Menu Toggle"
//               className="h-4"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`${
//           isMobileMenuOpen ? "block" : "hidden"
//         } absolute top-0 left-0 w-full h-screen bg-white z-10 lg:hidden dark:bg-gray-900`}
//       >
//         {/* Mobile Links */}
//         <div className="flex flex-col items-start space-y-4 p-6">
//           <Link to="/" onClick={toggleMobileMenu} className="ml-6 text-blue-500">
//             Home
//           </Link>
//           <Link
//             to="/pricing"
//             onClick={toggleMobileMenu}
//             className="ml-4 w-[90%] py-1 px-2 hover:bg-[#E3EBFD] rounded-lg"
//           >
//             Pricing
//           </Link>
//           {/* Other Links... */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
