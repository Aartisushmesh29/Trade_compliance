import React, { useState } from "react";
import PenIcon from "../assets/lucide_pen-line.svg";
import Pathicon from "../assets/lsicon_path-outline.svg";
import Location from "../components/Location";

const HSView = ({ theme, toggleTheme }) => {
  const [viewOption, setViewOption] = useState(""); // Track which option is selected
  const [chapters, setChapters] = useState([{ code: "" }]);
  const [fromTo, setFromTo] = useState({
    firstChapter: "",
    secondChapter: "",
  });

  const handleAddChapter = () => {
    setChapters([...chapters, { code: "" }]);
  };

  const handleChangeChapterCode = (index, value) => {
    const newChapters = [...chapters];
    newChapters[index].code = value;
    setChapters(newChapters);
  };

  return (
    <>
      <Location
        from={{ title: "Product", url: "/product" }}
        to={{ title: "HS", url: "/hs" }}
      />
      <div className=" lg:pl-[198px] w-full pt-10 h-[160vh] md:h-[120vh]">
        <a href="https://example.com">
          <h6 className="text-blue-600  mb-4">HS view</h6>
        </a>
        <h1 className="text-xl font-semibold mb-4">
          Classify List ( Find HS view)
        </h1>
        <p className="text-gray-600 mb-8">
          Explore and classify your products using the Harmonized System (HS)
          Codes, featuring detailed descriptions and examples for accurate trade
          compliance.
        </p>

        {/* Country Input */}
        <label
          className={`block mb-4 text-sm font-semibold ${
            theme === "dark" ? "text-white " : "text-black"
          }`}
        >
          Select Country
        </label>
        <select
          className={`border rounded-md p-2 w-1/2 mb-6
          ${
            theme === "dark"
              ? "border-gray-600 bg-gray-800 text-white"
              : "border-gray-300 bg-white text-black"
          }`}
        >
          <option value="" disabled selected>
            Select a country
          </option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="United Kingdom">United Kingdom</option>
          {/* Add more countries as needed */}
        </select>

        {/* Options for Chapters */}
        <p className="block mb-4 text-sm font-semibold">Chapters</p>
        <div className="flex justify-between mb-4">
          <button
            className={`border rounded-md p-4 w-1/2 mr-2 ${
              viewOption === "manual" ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setViewOption("manual")}
          >
            <p className="font-semibold">
              <img
                src={PenIcon}
                alt="Pen Icon"
                className="inline w-4 h-4 mr-2 bg-white rounded-sm"
              />
              Manually add chapters
            </p>
            <p className="text-sm text-gray-500">
              You can select and add chapters according to your need
            </p>
          </button>

          <button
            className={`border p-4 w-1/2 rounded-md ${
              viewOption === "fromTo" ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setViewOption("fromTo")}
          >
            <p className="font-semibold">
              <img
                src={Pathicon}
                alt="Pen Icon"
                className="inline w-4 h-4 mr-2 bg-white rounded-sm"
              />
              From To
            </p>
            <p className="text-sm text-gray-500">
              You can select the starting and ending chapters
            </p>
          </button>
        </div>

        {/* Manually Add Chapters */}
        {viewOption === "manual" && (
          <>
            {chapters.map((chapter, index) => (
              <div key={index} className="mb-4">
                <label
                  className={`block mb-4 text-sm font-semibold ${
                    theme === "dark" ? "text-gray-300" : "text-black"
                  }`}
                >
                  Select HS Code
                </label>
                <select
                  className={`border rounded-md p-2 w-1/2 mb-6
    ${
      theme === "dark"
        ? "border-gray-600 bg-gray-800 text-white"
        : "border-gray-300 bg-white text-black"
    }`}
                  onChange={(e) => handleSelectChapterCode(e.target.value)} // Handle selection change
                >
                  <option value="" disabled selected>
                    Select an HS code
                  </option>
                  <option value="0101.21">
                    0101.21 - Horses, Purebred Breeding
                  </option>
                  <option value="0201.10">
                    0201.10 - Bovine Meat, Fresh/Chilled
                  </option>
                  <option value="0402.21">
                    0402.21 - Milk Powder, Low Fat
                  </option>
                  <option value="0703.10">
                    0703.10 - Fresh Onions and Shallots
                  </option>
                  <option value="8517.12">8517.12 - Smartphones</option>
                  {/* Add more HS codes as needed */}
                </select>
              </div>
            ))}
            <button
              onClick={handleAddChapter}
              className="text-blue-500 w-1/2 text-start rounded-md p-2 text-sm mb-6 border-[1.7px] border-dotted border-blue-500 "
            >
              Add one more chapter
            </button>
          </>
        )}

        {/* From To Chapters */}
        {viewOption === "fromTo" && (
          <>
            <div className="mb-4">
              <label className="block text-sm mb-2 font-semibold">
                Select First chapter / HS code
              </label>
              <input
                type="text"
                value={fromTo.firstChapter}
                onChange={(e) =>
                  setFromTo({ ...fromTo, firstChapter: e.target.value })
                }
                placeholder="0101.21 / Pure-bred breeding horses"
                className="border border-gray-300 rounded-md p-2 w-1/2"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm mb-2 font-semibold">
                Select Second chapter / HS code
              </label>
              <input
                type="text"
                value={fromTo.secondChapter}
                onChange={(e) =>
                  setFromTo({ ...fromTo, secondChapter: e.target.value })
                }
                placeholder="0102.21 / Pure-bred breeding animals"
                className="border border-gray-300 rounded-md p-2 w-1/2"
              />
            </div>
          </>
        )}
        <div>
          <button className="bg-blue-600 text-white p-2 mb-2 rounded-md w-1/2">
            Find HS View
          </button>
        </div>
      </div>
    </>
  );
};

export default HSView;
