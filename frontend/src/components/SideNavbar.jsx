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
      title: "Profile",
      logo: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_775_216)">
            <path
              d="M14 7.99959C14.0019 9.19075 13.6476 10.3553 12.9827 11.3436C12.4343 12.1616 11.6928 12.8319 10.8237 13.2951C9.95464 13.7584 8.98482 14.0003 8 13.9996C7.01518 14.0003 6.04536 13.7584 5.1763 13.2951C4.30724 12.8319 3.56572 12.1616 3.01733 11.3436C2.49515 10.5652 2.1626 9.67529 2.04634 8.74521C1.93007 7.81514 2.03333 6.87075 2.34783 5.98777C2.66233 5.1048 3.17933 4.30778 3.85738 3.66062C4.53543 3.01346 5.35566 2.53416 6.25234 2.26114C7.14901 1.98813 8.09718 1.92898 9.02083 2.08846C9.94448 2.24793 10.8179 2.62158 11.5711 3.17946C12.3244 3.73735 12.9364 4.46394 13.3582 5.30099C13.78 6.13804 13.9998 7.06227 14 7.99959Z"
              stroke="#222222"
            />
            <path
              d="M8.66675 6C8.66675 6.17681 8.59651 6.34638 8.47149 6.4714C8.34646 6.59643 8.17689 6.66667 8.00008 6.66667V8C8.53052 8 9.03922 7.78929 9.4143 7.41421C9.78937 7.03914 10.0001 6.53043 10.0001 6H8.66675ZM8.00008 6.66667C7.82327 6.66667 7.6537 6.59643 7.52868 6.4714C7.40365 6.34638 7.33342 6.17681 7.33342 6H6.00008C6.00008 6.53043 6.2108 7.03914 6.58587 7.41421C6.96094 7.78929 7.46965 8 8.00008 8V6.66667ZM7.33342 6C7.33342 5.82319 7.40365 5.65362 7.52868 5.5286C7.6537 5.40357 7.82327 5.33333 8.00008 5.33333V4C7.46965 4 6.96094 4.21071 6.58587 4.58579C6.2108 4.96086 6.00008 5.46957 6.00008 6H7.33342ZM8.00008 5.33333C8.17689 5.33333 8.34646 5.40357 8.47149 5.5286C8.59651 5.65362 8.66675 5.82319 8.66675 6H10.0001C10.0001 5.46957 9.78937 4.96086 9.4143 4.58579C9.03922 4.21071 8.53052 4 8.00008 4V5.33333ZM3.44408 11.904L2.80475 11.714L2.70142 12.0627L2.93808 12.338L3.44408 11.904ZM12.5561 11.904L13.0627 12.338L13.2987 12.0627L13.1954 11.714L12.5561 11.904ZM6.00008 10.6667H10.0001V9.33333H6.00008V10.6667ZM6.00008 9.33333C5.28212 9.33311 4.58327 9.5647 4.00753 9.99366C3.4318 10.4226 3.00994 11.026 2.80475 11.714L4.08275 12.094C4.20606 11.6814 4.45928 11.3196 4.80473 11.0624C5.15018 10.8052 5.56942 10.6664 6.00008 10.6667V9.33333ZM8.00008 13.3333C7.23041 13.3342 6.46971 13.1681 5.77049 12.8464C5.07127 12.5247 4.45018 12.0551 3.95008 11.47L2.93808 12.338C3.56334 13.069 4.33967 13.6557 5.21357 14.0578C6.08747 14.4598 7.03815 14.6675 8.00008 14.6667V13.3333ZM10.0001 10.6667C10.9047 10.6667 11.6707 11.268 11.9174 12.0947L13.1954 11.714C12.9903 11.0261 12.5678 10.4228 11.9922 9.99385C11.4166 9.56492 10.7179 9.33325 10.0001 9.33333V10.6667ZM12.0501 11.47C11.55 12.0551 10.9289 12.5247 10.2297 12.8464C9.53046 13.1681 8.76976 13.3342 8.00008 13.3333V14.6667C8.96202 14.6675 9.9127 14.4598 10.7866 14.0578C11.6605 13.6557 12.4375 13.069 13.0627 12.338L12.0501 11.47Z"
              fill="#222222"
            />
          </g>
          <defs>
            <clipPath id="clip0_775_216">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      url: "/profile",
    },
    {
      title: "Product",
      logo: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_773_184)">
            <path
              d="M1 14C1 14.1406 1.02604 14.2708 1.07812 14.3906C1.13021 14.5104 1.20052 14.6146 1.28906 14.7031C1.3776 14.7917 1.48438 14.8646 1.60938 14.9219C1.73438 14.9792 1.86458 15.0052 2 15H7L9.00781 16H2C1.72396 16 1.46615 15.9479 1.22656 15.8438C0.986979 15.7396 0.773438 15.5964 0.585938 15.4141C0.398438 15.2318 0.255208 15.0208 0.15625 14.7812C0.0572917 14.5417 0.00520833 14.2812 0 14V2C0 1.74479 0.0546875 1.4974 0.164062 1.25781C0.273438 1.01823 0.421875 0.804688 0.609375 0.617188C0.796875 0.429688 1.01042 0.28125 1.25 0.171875C1.48958 0.0625 1.73958 0.00520833 2 0H13V5.32031L12 4.82031V1H2C1.88021 1 1.76042 1.02865 1.64062 1.08594C1.52083 1.14323 1.41406 1.22135 1.32031 1.32031C1.22656 1.41927 1.15104 1.52604 1.09375 1.64062C1.03646 1.75521 1.00521 1.875 1 2V12.2812C1.15104 12.1927 1.3099 12.125 1.47656 12.0781C1.64323 12.0312 1.81771 12.0052 2 12H6V13H2C1.85938 13 1.72917 13.026 1.60938 13.0781C1.48958 13.1302 1.38542 13.2005 1.29688 13.2891C1.20833 13.3776 1.13542 13.4844 1.07812 13.6094C1.02083 13.7344 0.994792 13.8646 1 14ZM16 7.92969V13.8828L11.5 16.125L7 13.8828V7.92969L11.5 5.6875L16 7.92969ZM11.5 6.80469L8.61719 8.24219L11.5 9.67969L14.3828 8.24219L11.5 6.80469ZM8 13.2656L11 14.7578V10.5469L8 9.04688V13.2656ZM15 13.2656V9.04688L12 10.5469V14.7578L15 13.2656Z"
              fill="#222222"
            />
          </g>
          <defs>
            <clipPath id="clip0_773_184">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      url: "/product",
      subRoutes: [
        {
          title: "HS",
          url: "/hs",
        },
        {
          title: "Calculate",
          url: "/calculate",
        },
        { title: "Complines", url: "/complines" },
      ],
    },
    {
      title: "API",
      logo: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5085 3.48711L20.5148 2.49336C20.4773 2.45586 20.4304 2.43945 20.3812 2.43945C20.332 2.43945 20.2851 2.4582 20.2476 2.49336L18.464 4.27695C17.6886 3.75161 16.7732 3.47152 15.8366 3.47305C14.6366 3.47305 13.4366 3.93008 12.5202 4.84648L10.132 7.23477C10.0971 7.27001 10.0775 7.31759 10.0775 7.36719C10.0775 7.41678 10.0971 7.46437 10.132 7.49961L16.4999 13.8676C16.5374 13.9051 16.5843 13.9215 16.6335 13.9215C16.6804 13.9215 16.7296 13.9027 16.7671 13.8676L19.1554 11.4793C20.7702 9.86211 20.9601 7.36133 19.7249 5.53789L21.5085 3.7543C21.5812 3.6793 21.5812 3.55977 21.5085 3.48711ZM18.0257 10.352L16.6335 11.7441L12.2554 7.36602L13.6476 5.97383C14.2312 5.39023 15.0093 5.0668 15.8366 5.0668C16.664 5.0668 17.4398 5.38789 18.0257 5.97383C18.6093 6.55742 18.9327 7.33555 18.9327 8.16289C18.9327 8.99023 18.6093 9.76602 18.0257 10.352ZM13.5679 12.8129C13.5327 12.778 13.4851 12.7584 13.4355 12.7584C13.3859 12.7584 13.3383 12.778 13.3031 12.8129L11.7421 14.3738L9.62571 12.2574L11.189 10.6941C11.2616 10.6215 11.2616 10.502 11.189 10.4293L10.3359 9.57617C10.3006 9.54128 10.253 9.5217 10.2034 9.5217C10.1539 9.5217 10.1063 9.54128 10.071 9.57617L8.50774 11.1395L7.49993 10.1316C7.48243 10.1141 7.46158 10.1003 7.43863 10.0911C7.41567 10.0818 7.39108 10.0773 7.36633 10.0777C7.31946 10.0777 7.27024 10.0965 7.23274 10.1316L4.8468 12.5199C3.23196 14.1371 3.04212 16.6379 4.27727 18.4613L2.49368 20.2449C2.45878 20.2802 2.43921 20.3278 2.43921 20.3773C2.43921 20.4269 2.45878 20.4745 2.49368 20.5098L3.48743 21.5035C3.52493 21.541 3.5718 21.5574 3.62102 21.5574C3.67024 21.5574 3.71712 21.5387 3.75462 21.5035L5.53821 19.7199C6.32805 20.2566 7.2468 20.5238 8.16555 20.5238C9.36555 20.5238 10.5656 20.0668 11.482 19.1504L13.8702 16.7621C13.9429 16.6895 13.9429 16.5699 13.8702 16.4973L12.8624 15.4895L14.4257 13.9262C14.4984 13.8535 14.4984 13.734 14.4257 13.6613L13.5679 12.8129ZM10.3523 18.0254C10.0654 18.3137 9.72426 18.5423 9.34853 18.698C8.97279 18.8537 8.56992 18.9334 8.16321 18.9324C7.33587 18.9324 6.56008 18.6113 5.97415 18.0254C5.68582 17.7385 5.45721 17.3974 5.30153 17.0216C5.14584 16.6459 5.06617 16.243 5.06712 15.8363C5.06712 15.009 5.38821 14.2332 5.97415 13.6473L7.36633 12.2551L11.7445 16.6332L10.3523 18.0254Z"
            fill="#222222"
          />
        </svg>
      ),
      url: "/api",
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
