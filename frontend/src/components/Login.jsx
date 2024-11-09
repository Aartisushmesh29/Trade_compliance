import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//assests
import GoogleLogo from "../assets/Google__G__logo.svg.png";
import { login } from "../api/api";

const Login = ({ theme, toggleTheme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // toggling show and hide password
  useEffect(() => {
    if (showPassword) {
      document.getElementById("password").setAttribute("type", "text");
    } else {
      document.getElementById("password").setAttribute("type", "password");
    }
  }, [showPassword]);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await login();
      console.log(response);
      
    } catch (error) {
      console.error(error);
      throw error;
    }

    //!   write the required functions here of login page
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-hidden h-[100vh]">
        <div>
          <h1 className="text-2xl font-bold">Welcome Back! Please Log In</h1>
          <div className="flex flex-col justify-center items-center gap-5 my-6 text-sm">
            <div className="w-full flex flex-col gap-2">
              <h3 className="">Email</h3>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className={` border-[2px] dark:border-gray-700  rounded-md p-2 w-full ${
                  theme === "light" ? "bg-white " : "bg-gray-800"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <h3 className="">Password</h3>
              <div
                className={`${
                  theme === "light" ? "bg-white" : "bg-gray-800"
                } flex flex-row justify-between border-[2px] dark:border-gray-700 rounded-md px-1`}
              >
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Enter your password"
                  className={`outline-none w-[88%] px-2 bg-transparent`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="text-[#407BFF] p-2 cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? "hide" : "show"}
                </span>
              </div>
            </div>
            <button
              className="p-2 bg-[#407BFF] hover:bg-blue-400 text-sm transition-all text-white rounded-md w-full duration-300"
              onClick={handleLogin}
              // for adding functionality to the login button, use previously defined handleLogin function
            >
              Log in
            </button>
          </div>
          <div className="flex justify-center items-center gap-4 text-gray-300">
            <div className="h-[1px] bg-gray-300 w-1/2"></div>
            <span className="text-sm">or</span>
            <div className="h-[1px] bg-gray-300 w-1/2"></div>
          </div>
          <div className="my-4">
            <button
              className="w-full p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all rounded-md border-2 flex  dark:border-gray-700 justify-center items-center gap-2"
              onClick={() => {}}
            >
              <img src={GoogleLogo} alt="" width={15} className="" />
              <span>Sign in with Google</span>
            </button>
            <p className="text-sm my-5 flex gap-1">
              <span>Don&apos;t have an account?</span>
              <Link to="/signup" className="hover:underline text-[#407BFF]">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
