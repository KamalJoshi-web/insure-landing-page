import React from "react";
import ImgPc from "../../assets/image-intro-desktop.jpg";
import ImgMobile from "../../assets/image-intro-mobile.jpg";
import PatternDesktop from "../../assets/bg-pattern-intro-right-desktop.svg";
import PatternMobile from "../../assets/bg-pattern-intro-right-mobile.svg";
import { motion } from "framer-motion";
import { slideInRight } from "../../animations/animationVariants";

const Graphics = () => {
  return (
    <motion.div
      variants={slideInRight}
      initial="initial"
      animate="animate"
      custom={1}
      className=" flex justify-center relative top-40 max-md:top-0 max-md:w-screen "
    >
      <img src={ImgPc} alt="HeroBanner" className=" max-md:hidden" />
      <img src={ImgMobile} alt="HeroBanner" className=" hidden max-md:block" />
      {/* Patterns */}
      <div className=" absolute -top-52 -right-32 max-md:top-[160%] max-md:right-0">
        <img src={PatternDesktop} alt="pattern" className=" max-md:hidden" />
        <img
          src={PatternMobile}
          alt="pattern"
          className=" hidden max-md:block"
        />
      </div>
    </motion.div>
  );
};

export default Graphics;
