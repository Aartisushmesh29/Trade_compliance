import React from "react";
import SideNavbar from "../components/SideNavbar"; // Import the sidebar
import HSView from "./hs_view"; // Import the HS content

const HS_Comp = ({theme,toggleTheme}) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideNavbar />
      
      {/* Main content area */}
      <div className=" p-5 ml-10"> {/* Adjusted margin for the sidebar */}
        <HSView /> {/* Rendering the HSView component */}
      </div>
    </div>
  );
};

export default HS_Comp;
