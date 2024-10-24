import React from "react";
import Location from "./Location";
import Footer from "../components/Footer";
import faq1Logo from "../assets/logo/si_barcode-line.svg";
import faq2Logo from "../assets/logo/iconoir_calculator.svg";
import faq3Logo from "../assets/logo/raphael_globe.svg";
// import Footer from "../components/Footer";

const PricingComponent = ({ theme }) => {
  const PricingPlanArray = [
    {
      title: "Basic",
      price: 5,
      currency: "$",
      month: 1,
      description:
        "Businesses or individuals needing short-term access to trade data.",
    },
    {
      title: "Standard",
      price: 16,
      currency: "$",
      month: 4,
      save: 5, // Optional, In percenteage %
      description:
        "Medium-term projects requiring continuous access to trade data.",
    },
    {
      title: "Premium",
      price: 50,
      currency: "$",
      month: 12,
      save: 10, // Optional, In percenteage %
      description:
        "Businesses or individuals needing short-term access to trade data.",
    },
  ];

  const FAQarray = [
    {
      title: "What is included in each plan?",
      logo: faq1Logo,
      description:
        "All plans include access to our HS Code Lookup, Customs Duty Calculator, and Compliance Document Checklist for a specific country. The only difference is the duration of access.",
    },
    {
      title: "Can I upgrade my plan?",
      logo: faq2Logo,
      description:
        "Yes! You can easily upgrade to a longer-term plan at any time to ensure uninterrupted access to your country’s data.",
    },
    {
      title: "Is the data updated?",
      logo: faq3Logo,
      description:
        "Yes, we regularly update our platform with real-time data from trusted global sources, ensuring that you always have the most accurate information.",
    },
  ];

  return (
    <>
      <div className="lg:mx-auto mx-5 lg:max-w-[150ch]">
        <Location from={{ title: "Pricing", url: "/pricing" }} />
        <div className="min-h-screen flex flex-col gap-7 lg:px-56 pt-10">
          <div className="">
            <h1 className="text-[16px] font-semibold pb-2">
              Choose the Plan That&apos;s Right for Your Business
            </h1>
            <p className="text-[12px]">
              Our flexible pricing plans give you access to essential trade
              tools—HS Code lookup, Customs Duty calculations, and Compliance
              document checklists. Whether you&apos;re looking for short-term
              access or a long-term solution, we&apos;ve got you covered. Simply
              pay for the specific country&apos;s data you need.
            </p>
          </div>

          <div className="flex gap-5 lg:flex-row flex-col justify-center items-start">
            <div className="lg:w-[40%] w-full text-[12px] space-y-3">
              <h2 className="font-semibold ">Key Features Across All Plans</h2>
              <ul className="list-disc pl-5">
                <li>
                  <span className="text-[#407BFF]">
                    Accurate and Up-to-Date Information:{" "}
                  </span>
                  <span>
                    Access real-time global trade data from trusted sources.
                  </span>
                </li>
                <li>
                  <span className="text-[#407BFF]">
                    Customs Duty Calculator:{" "}
                  </span>
                  <span>
                    Calculate precise landed costs including duties, taxes, and
                    other fees based on the selected country.
                  </span>
                </li>
                <li>
                  <span className="text-[#407BFF]">
                    Compliance Document Checklist:{" "}
                  </span>
                  <span>
                    Get a tailored list of necessary documents for each trade,
                    ensuring your business stays compliant with international
                    regulations.
                  </span>
                </li>
                <li>
                  <span className="text-[#407BFF]">
                    Country-Specific Data:{" "}
                  </span>
                  <span>
                    Pay only for the country whose trade data you need
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-[60%] w-full lg:pl-32 flex flex-col justify-center items-center gap-3">
              {PricingPlanArray.map((pricing, index) => {
                return (
                  <>
                    <div className="w-full rounded-lg border-2 p-4 hover:border-blue-500 cursor-pointer transition-all duration-100">
                      <h3 className="text-[16px] font-semibold">
                        {pricing.title}
                      </h3>
                      <div className="flex justify-between">
                        <p>
                          <span className="font-semibold text-3xl">
                            {pricing.currency} {pricing.price}{" "}
                          </span>
                          <span className="text-gray-300">
                            / {pricing.month == 1 ? "" : pricing.month} month
                          </span>
                        </p>
                        {pricing.save && (
                          <div className="bg-[#81fcb4] text-[#25a65b] rounded-md text-center flex justify-center items-center text-xs px-2">
                            save {pricing.save}%
                          </div>
                        )}
                      </div>
                      <p className="text-xs pt-4">{pricing.description}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="pb-5">Why Choose Us?</h2>
            <ul className="list-disc ml-4 text-sm space-y-3">
              <li className="space-x-1">
                <span className="font-semibold">
                  Accurate and Up-to-Date Information:{" "}
                </span>
                <span>
                  Access real-time global trade data from trusted sources.
                </span>
              </li>
              <li className="space-x-1">
                <span className="font-semibold">User-Friendly Interface: </span>
                <span>
                  Our platform is designed for businesses of all sizes, from
                  startups to enterprises.
                </span>
              </li>
              <li className="space-x-1">
                <span className="font-semibold">Dedicated Support: </span>
                <span>
                  We offer 24/7 customer support to help you navigate your trade
                  data needs.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pb-5">FAQ</h2>
            <div className="py-7 grid lg:grid-cols-3 gap-10 text-[12px]">
              {FAQarray.map((faq, index) => (
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
    </>
  );
};

export default PricingComponent;
