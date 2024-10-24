// this component is conataing both sidenavdocs and docs page

import React, { useState } from "react";

import SideNav from "../SideNavDocs";
// import DocsComponent from "../Docs/DocsComponent";

const Profile = ({ theme }) => {
  return (
    <div className="lg:pt-20 ml-12 lg:ml-[300px] lg:mr-[180px] p-3 min-h-screen flex flex-col justify-center items-center">
      {!theme ? ( //!check if user exist or not
        <div className="typewriter absolute top-[40vh] self-center">
          <div className="slide">
            <i></i>
          </div>
          <div className="paper"></div>
          <div className="keyboard"></div>
        </div>
      ) : (
        <>
          <SideNav />
          {/* <DocsComponent/> */}
        </>
      )}
    </div>
  );
};

export default Profile;