// this is sidebar component, used in only Profile_With_Sidenavbar.jsx

import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const [url, seturl] = useState("");
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    console.log(window.location.pathname);
    seturl(window.location.pathname);
  }, [location]);

  const routesArray = [
    {
      title: "HS",
      url: "/hs",
      subRoutes: [
        {
          title: "HS-Guide",
          url: "/hs_guide",
        },
        {
          title: "HS-List",
          url: "/hs_list",
        },
      ],
    },
    {
      title: "Custom",
      url: "/product",
      subRoutes: [
        {
          title: "Custom-guide",
          url: "/custom_guide",
        },
        {
          title: "Details",
          url: "/custom_details",
        },
      ],
    },
    {
      title: "API",
      url: "/api",
    },
    {
        title: "Terms And Conditions",
        url: "/TermsAndConditions",
      },
  ];
  return (
    <>
      {/* desktop navbar */}
      <div
        className={`fixed left-0 top-0 pt-24 hidden lg:flex flex-col min-h-screen lg:w-60 dark:bg-gray-900 bg-white border-r dark:border-gray-700 p-3`}
      >
        {routesArray.map((route, index) => {
          const svgLogo = route.logo;
          return (
            <>
              <Link
                to={route.title !== "Product" ? route.url : "#"}
                key={index}
              >
                <div
                  key={index}
                  className={`${
                    route.url == url && "text-blue-500"
                  } flex items-center gap-1 transition-all duration-200 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
                >
                  <span className={` dark:invert `}>{svgLogo}</span>
                  <p className="ml-2 font-semibold">{route.title}</p>
                </div>
              </Link>
              {route.subRoutes && (
                <div className="ml-4 text-sm">
                  {route.subRoutes.map((subRoute, i) => (
                    <Link key={i} to={subRoute.url}>
                      <div
                        key={i}
                        className={`flex ${
                          subRoute.url == url
                            ? "text-[#407bff]"
                            : "text-gray-600"
                        } items-center cursor-pointer p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800`}
                      >
                        <p className="ml-2">{subRoute.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          );
        })}
      </div>
      <>
        {/* mobile navbar before opening */}
        <div
          className={` ${
            isSideNavOpen ? "hidden" : "flex"
          } pt-24 w-12 fixed left-0 dark:bg-gray-900 bg-white border-r dark:border-gray-700 flex-col min-h-screen lg:hidden  items-center`}
          onClick={() => {
            setIsSideNavOpen(true);
          }}
        >
          <div className=" flex flex-col gap-1">
            <div className="w-8 dark:bg-gray-200 bg-gray-700 h-1"></div>
            <div className="w-8 dark:bg-gray-200 bg-gray-700 h-1"></div>
            <div className="w-8 dark:bg-gray-200 bg-gray-700 h-1"></div>
          </div>
        </div>
        {/* mobile navbar after opening */}
        <div
          className={`${
            isSideNavOpen ? "flex" : "hidden"
          } fixed left-0 backdrop-blur-sm w-screen h-screen bg-black/40 z-[40]`}
          onClick={() => {
            setIsSideNavOpen(false);
          }}
        >
          <div
            className={`Animation-AppearFromLeft pt-24 text-lg left-0 transition-all duration-500 relative lg:hidden flex flex-col px-16 w-[65%] dark:bg-gray-800 bg-gray-200`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {routesArray.map((route, index) => {
              const svgLogo = route.logo;

              return (
                <>
                  <Link
                    to={route.title !== "Product" ? route.url : "#"}
                    key={index}
                  >
                    <div
                      key={index}
                      className={`${
                        route.url == url && "text-blue-500"
                      } flex items-center gap-1 transition-all duration-200 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
                    >
                      <span className={` dark:invert `}>{svgLogo}</span>
                      <p className="ml-2 font-semibold">{route.title}</p>
                    </div>
                  </Link>
                  {route.subRoutes && (
                    <div className="ml-4 text-sm">
                      {route.subRoutes.map((subRoute, i) => (
                        <Link key={i} to={subRoute.url}>
                          <div
                            key={i}
                            className={`flex ${
                              subRoute.url == url
                                ? "text-[#407bff]"
                                : "text-gray-600"
                            } items-center cursor-pointer p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800`}
                          >
                            <p className="ml-2">{subRoute.title}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export default SideNavbar;
