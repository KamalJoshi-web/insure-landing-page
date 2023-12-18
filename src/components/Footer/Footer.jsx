import React from "react";
import Socials from "./Socials";
import LinkPath from "./LinkPath";
import { link } from "./links";
import PatternMobile from "../../assets/bg-pattern-footer-mobile.svg";
import PatternPc from "../../assets/bg-pattern-footer-desktop.svg";
import { motion } from "framer-motion";
import { zoomIn } from "../../animations/animationVariants";

const Footer = () => {
  return (
    <motion.footer
      variants={zoomIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={0.6}
      className=" relative bg-DarkGrayishViolet bg-opacity-10 px-10 overflow-hidden"
    >
      <Socials />
      {/* Links */}
      <div className=" z-30 flex justify-between pb-10  gap-5 w-10/12 max-md:w-full max-md:flex-col  max-md:items-center">
        {link.map((item, index) => (
          <LinkPath key={index} title={item.head} subLink={item.name} />
        ))}
      </div>
      {/* Parttern */}
      <div className=" absolute top-0 left-0 -z-10 ">
        <img src={PatternPc} alt="pattern" className=" max-md:hidden" />
        <img
          src={PatternMobile}
          alt="pattern"
          className=" hidden max-md:block"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
