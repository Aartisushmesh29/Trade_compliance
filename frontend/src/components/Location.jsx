import React from "react";
import { Link } from "react-router-dom";

const Location = ({ from, to }) => {
  return (
    <div className="lg:pl-52 pt-20 dark:bg-gray-900 w-full text-sm">
      <Link to={from.url}>
        <span className="hover:underline text-blue-500">{from.title}</span>
      </Link>{" "}
      {to && (
        <>
          <span className="">&gt;</span>{" "}
          <Link to={to.url}>
            <span className="hover:underline text-blue-500">{to.title}</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default Location;
