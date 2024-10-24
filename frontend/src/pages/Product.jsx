import React from "react";
import { useNavigate } from "react-router-dom";

// assests
import logo1 from "../assets/logo/Vector.svg";
import logo2 from "../assets/logo/Group (1).svg";
import logo3 from "../assets/logo/hugeicons_calculator.svg";
import logo4 from "../assets/logo/eos-icons_trusted-organization.svg";

import faq1Logo from "../assets/logo/si_barcode-line.svg";
import faq2Logo from "../assets/logo/iconoir_calculator.svg";
import faq3Logo from "../assets/logo/raphael_globe.svg";
import faq4Logo from "../assets/logo/si_barcode-line (1).svg";
import Footer from "../components/Footer";

const Product = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const featuresArray = [
    {
      url: "/hs",
      title: "HS Classify List",
      logo: logo1,
      color: "hover:border-orange-500",
      description:
        "Easily navigate the Harmonized System (HS) codes to classify products for import and export. This comprehensive list helps businesses and individuals identify the correct product codes for global trade, ensuring accuracy and compliance with international trade regulations.",
      // here, snb meanse Sidenavbar and "=n" means "no" => no sidenavbar
    },
    {
      title: "Landed Cost",
      logo: logo2,
      color: "hover:border-green-500",
      description:
        "Calculate the total cost of importing goods, including taxes and stamp duties, with our Landed Cost Calculator. This tool helps you estimate the true cost of goods after accounting for all applicable charges such as customs duties, shipping, and stamp duty, making it easier to manage your trade .",
    },
    {
      title: " Compliance",
      logo: logo3,
      color: "hover:border-red-500",
      description:
        "Ensure your business operations meet all legal and regulatory standards with our Compliance Document Checklist. This section provides a comprehensive list of required documents, ensuring that you comply with trade laws, tax regulations and other important legal requirements.",
    },
  ];

  const GeneralQuestionsArray = [
    {
      title: "What is an HS Code, and why do I need it?",
      logo: faq1Logo,
      description:
        "An HS Code (Harmonized System Code) is an internationally standardized system of names and numbers used to classify traded products. It’s essential for ensuring your products are correctly classified for import/export, helping to avoid shipping delays, compliance issues, and unexpected duties.",
    },
    {
      title: "How does the Landed Cost Calculator work?",
      logo: faq2Logo,
      description:
        "Our Landed Cost Calculator provides a complete breakdown of all the costs involved in importing goods, including shipping, customs duties, taxes, and stamp duties. Simply enter your product details and destination, and the calculator will estimate the total cost of landing the goods at their destination.",
    },
    {
      title: "Can I use the platform for multiple countries?",
      logo: faq3Logo,
      description:
        "Yes! Our platform supports international trade data from multiple countries, allowing you to classify products, calculate costs, and ensure compliance across various regions.",
    },
    {
      title: "What documents do I need for compliance?",
      logo: faq4Logo,
      description:
        "The required documents for compliance vary depending on the country and the type of product. Our Compliance Document Checklist tool helps you determine which forms, certifications, and legal documents are necessary for your specific trade. It ensures you meet all regulatory requirements for customs, taxes, and trade regulations.",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      } pt-[70px]`}
    >
      <h1 className="text-2xl lg:my-5  font-bold p-5 lg:px-56">
        Global <span className="text-[#407BFF]">Trade Data</span> and{" "}
        <span className="text-[#407BFF]">Compliance Tools</span>
      </h1>
      <div className="p-5 lg:px-56 flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4 justify-center items-center">
          {featuresArray.map((feature, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`rounded-lg min-h-[100px] border-2 p-4 ${feature.color} transition-all cursor-pointer`}
                  onClick={() => {
                    if (feature.url) {
                      navigate(feature.url); // Navigate to the specified URL on click
                    }
                  }}
                >
                  <h1 className="flex gap-5 justify-start items-end">
                    <img src={feature.logo} alt={`feature${index + 1}-logo`} />
                    <span className="lg:text-[16px]  font-bold">
                      {feature.title}
                    </span>
                  </h1>
                  <p className="text-[12px] my-2">{feature.description}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex lg:flex-row flex-col gap-10 my-10">
          <div className="lg:w-[60%]">
            <h1 className=" font-bold lg:text-[16px] text-2xl my-3">
              Why Our Platform?
            </h1>
            <p className="text-[12px]">
              At Vexaya, we simplify global trade for businesses of all sizes.
              Our platform is designed to help you navigate complex trade
              processes with ease, offering powerful tools for product
              classification, cost calculation, and compliance management.
              Here&apos;s why you should choose us:
            </p>
            <ul className="text-[12px] list-disc p-4">
              <li>
                <p>
                  <span className="font-bold">User-Friendly Interface:</span>{" "}
                  Our platform is designed with simplicity in mind, making it
                  easy for anyone to use—no technical expertise required.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Accurate and Reliable Data:</span>{" "}
                  We provide real-time, accurate trade data and updates,
                  ensuring your business stays ahead of changing regulations.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Tailored Solutions:</span> Whether
                  you&apos;re a small business or a large enterprise, our tools
                  can be customized to fit your specific trade needs.
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-[40%]">
            <h1 className="flex gap-3 items-center font-bold lg:text-[16px] my-3">
              <img src={logo4} alt="feature4-logo" />
              <span>Trusted by Businesses Worldwide</span>
            </h1>
            <p className="text-[12px]">
              Thousands of businesses trust us to streamline their global trade
              processes, reduce costs, and ensure compliance. Join them today to
              take control of your international trade operations with
              confidence.
            </p>
          </div>
        </div>
        <div>
          <h1 className=" font-bold lg:text-[16px] text-2xl my-3">
            General Questions
          </h1>
          <p className="text-[12px] lg:w-[60%]">
            Welcome to our FAQ section! Here, you will find answers to the most
            common questions about our platform and services. Whether
            you&apos;re looking for information on HS Codes, landed cost
            calculations, compliance requirements, or how to get started,
            we&apos;ve got you covered
          </p>
          <div className="py-7 grid lg:grid-cols-3 gap-10 text-[12px]">
            {GeneralQuestionsArray.map((faq, index) => (
              <div key={index} className="rounded-lg">
                <h1 className="flex gap-5 justify-start items-end">
                  <img
                    src={faq.logo}
                    alt={`faq${index + 1}-logo`}
                    className={` ${theme !== "light" && " invert"}`}
                  />
                  <span className="font-bold">{faq.title}</span>
                </h1>
                <p className="my-2">{faq.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default Product;
