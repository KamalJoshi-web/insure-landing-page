import React, { useState } from "react";
import { Logo, Button } from "../index";
import { link, linkStyle } from "./links";
import Hamburger from "../../assets/icon-hamburger.svg";
import CloseMenu from "../../assets/icon-close.svg";
import NavPattern from "../../assets/bg-pattern-mobile-nav.svg";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div className="hidden justify-between items-center  relative max-sm:flex ">
      {/* Logo */}
      <Logo />
      {/* Links  */}
      <div
        className={` duration-300 absolute flex flex-col items-center gap-5 py-10    bg-VeryDarkViolet h-[90vh]  
        ${
          isOpen
            ? " top-[165%] visible -z-10 opacity-100 w-full"
            : " invisible  top-0 z-0 opacity-0 w-0 "
        }  `}
      >
        {link.map((item, index) => (
          <div key={index}>
            <a href={item.path} className={` text-VeryLightGray ${linkStyle}`}>
              {item.name}
            </a>
          </div>
        ))}
        <Button borderColor="border-VeryLightGray" color="text-VeryLightGray">
          View plans
        </Button>
      </div>
      {/* Menu */}
      <button onClick={handleMenu}>
        <img
          src={isOpen ? CloseMenu : Hamburger}
          alt={isOpen ? "Close Menu" : "Open Menu"}
        />
      </button>
      {/* pattern */}
      <img
        src={NavPattern}
        alt="Nav Pattern"
        className={` duration-300 absolute   ${
          isOpen
            ? "visible w-full opacity-100 -bottom-[1860%]"
            : "invisible w-0 opacity-0 bottom-0"
        } `}
      />
    </div>
  );
};

export default MobileNav;
