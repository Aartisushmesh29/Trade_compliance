import React from "react";
import map from "../assets/map2.svg";

const Home = ({ theme, toggleTheme }) => {
  return (
    <div
      className={`flex justify-center px-[24px] md:px-[] flex-col items-center transition-all duration-500 ease-in-out overflow-hidden ${
        theme === "light" ? "text-[#222222] bg-white" : "text-white bg-gray-900"
      }`}
    >
      <div className="flex md:w-[100ch]">
        <div className="flex flex-col gap-[24px] h-[60vh] justify-center items-center fade-in">
          <p className="md:text-5xl font-medium text-[32px] text-center">
            Global Trade{" "}
            <span
              className={`${
                theme === "light" ? "text-[#407bff]" : "text-[#7dafff]"
              }`}
            >
              Insights
            </span>{" "}
            at Your{" "}
            <span
              className={`${
                theme === "light" ? "text-[#407bff]" : "text-[#7dafff]"
              }`}
            >
              Fingertips
            </span>
          </p>
          <p className="text-[12px] md:text-2xl font-normal text-center">
            Explore import and export data from countries worldwide with
            accurate and up-to-date insights.
          </p>
          <button
            className={`text-white font-normal px-4 py-2 rounded-lg shadow w-fit hover:bg-[#014FFE] ${
              theme === "light" ? "bg-[#407bff]" : "bg-[#014FFE]"
            }`}
          >
            Start Exploring Data
          </button>
        </div>
      </div>
      <div className="flex w-[600px] md:w-[1200px] fade-in2">
        <img src={map} alt="Map showing trade data" />
      </div>
    </div>
  );
};

export default Home;
