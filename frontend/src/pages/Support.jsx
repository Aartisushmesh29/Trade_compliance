import React, { useState } from "react";
import Footer from "../components/Footer";
import world from "../assets/map2.svg";
import icon from "../assets/Vector.svg";
import email from "../assets/Email.svg";
import phone from "../assets/Phone.svg";
import map from "../assets/Map Pin.svg";
import search from "../assets/Search.svg";

const Support = ({ theme }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    issues: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", form);
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center pt-16 ${
        theme === "dark" ? "text-white" : "text-[#222222]"
      }`}
    >
      {/* Header Section */}
      <div
        className="w-full text-white py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${world})`, // Replace with your actual image path
        }}
      >
        {/* Optional blue overlay */}
        <div className="absolute inset-0 bg-blue-400 opacity-50"></div>

        {/* Content on top of the background */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center mb-4">
            Welcome to Vexaya Support
          </h1>
          <div className="flex justify-center">
            <div className="relative w-11/12 md:w-1/2">
              {/* Input Field */}
              <input
                type="text"
                placeholder="How can we help you?"
                className={`w-full p-3 rounded-full bg-white bg-opacity-20 border placeholder-gray-100 ${
                  theme === "dark" ? " text-white" : " text-black "
                } focus:outline-none pl-6 pr-12`}
                style={{ backdropFilter: "blur(5px)" }} // Add blur for that glassy effect
              />
              {/* Search Icon */}
              <img
                src={search} // Assuming search is the name of the imported icon
                alt="Search Icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 h-5 w-5 opacity-70"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto p-6">
        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="mb-4 font-light text-sm">
            Stuck on something? Here are some FAQs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4">
              <div className="flex gap-2">
                <img src={icon} alt="" className="h-6 mt-1 pt-1 bg-blue-200" />
                <div>
                  <h4 className="font-medium mb-2">
                    How do I access compliance regulations for a specific
                    country?
                  </h4>
                  <p className="font-light text-sm">
                    Go to the compliance section, select the destination
                    country, and you'll see all of the regulations relevant to
                    your product.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2">
                <img src={icon} alt="" className="h-6 mt-1 pt-1 bg-blue-200" />
                <div>
                  <h3 className="font-medium mb-2">
                    How do I use the HS Code lookup tool?
                  </h3>
                  <p className="font-light text-sm">
                    Navigate to the product classification section, enter a
                    product description, and our tool will suggest the most
                    relevant HS Code.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2">
                <img src={icon} alt="" className="h-6 mt-1 pt-1 bg-blue-200" />
                <div>
                  <h3 className="font-medium mb-2">
                    How do I access compliance regulations for a specific
                    country?
                  </h3>
                  <p className="font-light text-sm">
                    Go to the compliance section, select the destination
                    country, and you'll see all of the regulations relevant to
                    your product.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <div className="flex gap-2">
                <img src={icon} alt="" className="h-6 mt-1 pt-1 bg-blue-200" />
                <div>
                  <h3 className="font-medium mb-2">
                    What should I do if my calculation results seem incorrect?
                  </h3>
                  <p className="font-light text-sm">
                    Double-check your input, such as the HS Code and destination
                    country. If the issue persists, contact support with a
                    screenshot of the problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Form Section */}
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          <div className="w-full lg:w-2/3 p-8 rounded-lg">
            <div className="mb-6">
              <h2 className="font-semibold text-xl">Need Help?</h2>
              <p>Contact us for the issues.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-200 dark:bg-gray-800"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-200 dark:bg-gray-800"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="issues" className="block font-medium">
                  Your Issues
                </label>
                <textarea
                  id="issues"
                  name="issues"
                  value={form.issues}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-200 dark:bg-gray-800"
                  placeholder="Facing any issues?"
                />
              </div>
              <button
                type="submit"
                className="px-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mx-auto block"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 space-y-6">
            <div className="flex flex-col items-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
              <img src={email} alt="" className="mb-2" />
              <p className="text-center">abc@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
              <img src={phone} alt="" />
              <p>+91-9900007777</p>
            </div>
            <div className="flex flex-col items-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
              <img src={map} alt="" />
              <p>Location</p>
            </div>
          </div>
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default Support;