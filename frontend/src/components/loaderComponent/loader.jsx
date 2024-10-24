import React from "react";
import "./loaderCss.css";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </>
  );
};

export default Loader;