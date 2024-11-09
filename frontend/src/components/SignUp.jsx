import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



//api
import { googleSignIn, signUp } from "../api/api";

//assests
import GoogleLogo from "../assets/Google__G__logo.svg.png";

const SignUp = ({ theme, toggleTheme }) => {
  // const provider = new firebase.auth.GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");

  const [isTermsAndConditionsChecked, setIsTermsAndConditionsChecked] =
    useState(false);

  const countryArray = [
    //use this array to show countries
    { name: "India", value: "India" },
    { name: "USA", value: "USA" },
    { name: "UK", value: "UK" },
    { name: "Australia", value: "Australia" },
  ];

  useEffect(() => {
    if (showPassword) {
      document.getElementById("password").setAttribute("type", "text");
    } else {
      document.getElementById("password").setAttribute("type", "password");
    }
  }, [showPassword]);

  //here is the sign up function
  const handleSignUp = async () => {
    if (isTermsAndConditionsChecked) {
      if (
        email === "" ||
        password === "" ||
        name === "" ||
        phoneNo === "" ||
        country === ""
      ) {
        alert("Please fill all the fields");
      } else {
        if (phoneNo.length !== 10) {
          alert("Please enter a valid phone number");
          return;
        }
        console.log("signed up successfully");

        const formData = {
          email: email,
          password: password,
          name: name,
          // phoneNo: phoneNo,
          // country: country,
        };
        try {
          const result = await signUp(formData);
          console.log(result);
          // alert("Signed up successfully", result);
          console.log("Signed up successfully", result);
        } catch (err) {
          // console.log(err);
          console.log("error in signing up", err);
        }

        //!write the required functions here of signup page
      }
    } else {
      alert("Please accept the terms and conditions");
    }
  };

  //here is the google sign in function
  const handleGoogleSignin = async () => {
    if (isTermsAndConditionsChecked) {
      
      // firebase
      //   .auth()
      //   .signInWithPopup(provider)
      //   .then((result) => {
      //     const token = result.credential.accessToken;
          // const user = result.user;

          // try {
          //   const result = await googleSignIn(token); //TODO: add token here

          //   console.log(result);
          //   alert("Signed up successfully", result);
          //   console.log("Signed up successfully", result);
          // } catch (err) {
          //   console.log("error in signing up", err);
          // }
          // googleSignIn(token)
          //   .then((result) => {
          //     console.log(result);
          //     alert("Signed up successfully", result);
          //   })
          //   .catch((err) => {
          //     console.error(err);
          //     alert("Error in signing up", err);
          //   });
          // })
          // .catch((error) => {
          //   console.error(error);
          // });
          

      //!write the required functions here of google signin
    } else {
      alert("Please accept the terms and conditions");
    }
  };

  return (
    <div className="flex justify-center items-center overflow-hidden h-[100vh]">
      <div>
        <h1 className="text-2xl font-bold">Welcome Back! Please Log In</h1>
        <div className="flex flex-col justify-center items-center gap-2 my-2 text-sm">
          <div className="w-full flex flex-col gap-2">
            <h3 className="">Full name</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your name"
              className={` border-[2px] dark:border-gray-700 rounded-md p-2 w-full ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <h3 className="">Phone no</h3>
            <input
              type="number"
              name=""
              id="PhnNo"
              placeholder="Enter your phone number"
              className={`NumInputWithNoScrollbar border-[2px] dark:border-gray-700 rounded-md p-2 w-full ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <h3 className="">Country</h3>
            <select
              name=""
              id="country"
              className={`border-[2px] dark:border-gray-700 rounded-md p-2 w-full ${
                country === "" ? "text-gray-400" : "text-grey-800"
              } ${theme === "light" ? "bg-white " : "bg-gray-800"}`}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="" className="text-gray-300">
                Select your country
              </option>
              {countryArray.map((country, index) => {
                return (
                  <option
                    key={index}
                    value={country.value}
                    className={`${
                      theme === "light" ? "bg-white " : "bg-gray-600"
                    } `}
                  >
                    {country.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h3 className="">Email</h3>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className={` border-[2px] dark:border-gray-700 rounded-md p-2 w-full ${
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
                className={`outline-none w-[88%] px-2  bg-transparent`}
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
          <div className="flex justify-start items-center gap-1 w-full my-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-[14px] h-[14px] cursor-pointer"
              onChange={(e) => setIsTermsAndConditionsChecked(e.target.checked)}
            />
            <span>I accept the </span>
            <Link to={"/termsAndConditions"} target="_blank">
              <span className="cursor-pointer hover:underline text-[#407BFF]">
                Terms and Conditions
              </span>
            </Link>
          </div>
          <button
            className={`p-2 ${
              isTermsAndConditionsChecked
                ? "bg-[#407BFF] hover:bg-blue-400 cursor-pointer"
                : "bg-blue-200 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
            }   text-sm transition-all text-white rounded-md w-full duration-300`}
            onClick={handleSignUp} //! for adding functionality to the login button, use previously defined handleLogin function
          >
            Sign up
          </button>
        </div>
        <div className="flex justify-center items-center gap-4 text-gray-300">
          <div className="h-[1px] bg-gray-300 w-1/2"></div>
          <span className="text-sm">or</span>
          <div className="h-[1px] bg-gray-300 w-1/2"></div>
        </div>
        <div className="my-4">
          <button
            className={`${
              isTermsAndConditionsChecked
                ? "hover:bg-gray-100 dark:hover:bg-gray-600 transition-all  dark:border-gray-700 cursor-pointer"
                : "bg-gray-200 cursor-not-allowed dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500"
            } w-full p-2 text-sm flex justify-center items-center gap-2 rounded-md border-2`}
            onClick={handleGoogleSignin}
          >
            <img
              src={GoogleLogo}
              alt=""
              width={15}
              className={`${!isTermsAndConditionsChecked && "grayscale"}`}
            />
            <span>Sign in with Google</span>
          </button>
          <p className="text-sm my-5 flex gap-1">
            <span>Already have an account?</span>
            <Link
              to="/login"
              className="cursor-pointer hover:underline text-[#407BFF]"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
