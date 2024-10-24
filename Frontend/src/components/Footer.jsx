import React from "react";
import { Link } from "react-router-dom";

import DarkVexayaLogo from "../assets/logo/Vexaya Logo for Dark BG.png";
import LightVexayaLogo from "../assets/logo/Vexaya Logo for Light BG.png";

const Footer = ({ theme }) => {
  const otherPagesArray = [
    { title: "Home", link: "/" },
    { title: "Pricing", link: "/pricing" },
    { title: "Blog", link: "/blog" },
    { title: "Pricing", link: "/pricing" },
    { title: "FAQ", link: "/faq" },
    { title: "About us", link: "/aboutus" },
    { title: "Contact us", link: "/contactus" },
    { title: "Terms & Conditions", link: "/TermsAndConditions" },
    { title: "Policies", link: "/policies" },
  ];
  return (
    <div className="relative w-full flex flex-col gap-8 justify-center items-center border-t-2 pt-7">
      <img
        src={theme === "light" ? LightVexayaLogo : DarkVexayaLogo}
        alt="Vexaya-logo"
        className="w-28"
      />
      <p className="lg:w-[24%] w-[78%] text-center font-semibold">
        Navigating Global Trade with Ease & Streamlining Trade Processes for
        Success
      </p>
      <ul className="flex flex-wrap px-10 mx-auto text-center lg:gap-4 gap-2 gap-x-3 text-[12px]">
        {otherPagesArray.map((page, index) => (
          <Link key={index} to={page.link}>
            <li className="hover:underline">{page.title}</li>
          </Link>
        ))}
      </ul>
      <div className="p-3 w-full text-white text-[12px] flex justify-center items-center bg-[#407BFF]">
        &#169; 2024 Vexaya. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
