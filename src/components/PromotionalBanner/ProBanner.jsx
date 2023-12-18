import React from "react";
import { Heading, Button } from "../index";
import Mob from "../../assets/bg-pattern-how-we-work-mobile.svg";
import Desk from "../../assets/bg-pattern-how-we-work-desktop.svg";
import { motion } from "framer-motion";
import { zoomIn } from "../../animations/animationVariants";

const ProBanner = () => {
  return (
    <motion.div
      variants={zoomIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className=" bg-DarkViolet relative  my-32 px-10 py-10 overflow-hidden mx-10"
    >
      {/* Items */}
      <div className=" flex justify-between items-center max-md:flex-col gap-5">
        <Heading>
          Find out more <br className=" max-md:hidden" /> about how we work
        </Heading>
        <Button
          borderColor="border-VeryLightGray"
          bgColor=" hover:bg-VeryLightGray"
          color="text-VeryLightGray hover:text-VeryDarkViolet"
        >
          How we work
        </Button>
      </div>
      {/* Pattern */}
      <div className=" absolute  right-0 -bottom-1">
        <img src={Desk} alt="pattern" className=" max-md:hidden" />
        <img src={Mob} alt="pattern" className=" hidden max-md:block" />
      </div>
    </motion.div>
  );
};

export default ProBanner;
