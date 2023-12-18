import React from "react";
import { Line, Logo } from "../index";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";

const Socials = () => {
  const socialStyles =
    "text-DarkGrayishViolet hover:text-DarkViolet  cursor-pointer text-xl duration-300";
  return (
    <>
      <div className="  py-10 flex justify-between items-center  gap-4 max-sm:flex-col max-sm:justify-center">
        {/* Logo */}
        <Logo />
        {/* Social */}
        <div className=" flex items-center gap-2">
          <FaFacebook className={socialStyles} />
          <FaTwitter className={socialStyles} />
          <FaPinterest className={socialStyles} />
          <FaInstagram className={socialStyles} />
        </div>
      </div>
      {/* Line */}
      <Line color="bg-DarkGrayishViolet" width="w-full" className=" mb-10 " />
    </>
  );
};

export default Socials;
