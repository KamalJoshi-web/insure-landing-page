import React from "react";
import { Button, Heading, Line } from "../index";
import PatternDesktop from "../../assets/bg-pattern-intro-left-desktop.svg";
import PatternMobile from "../../assets/bg-pattern-intro-left-mobile.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/animationVariants";

const Info = () => {
  return (
    <motion.aside
      variants={fadeIn}
      initial="initial"
      animate="animate"
      custom={0.95}
      className="flex flex-col items-start gap-5 relative max-md:items-center max-md:py-16 "
    >
      <Line className="   mb-5 max-md:hidden" />
      <Heading>
        Humanizing <br /> your insurance.
      </Heading>
      <p className=" text-VeryLightGray opacity-80 font-BodyKarla max-md:text-center">
        Get your life insurance coverage easier and faster. We blend our
        expertise <br /> and technology to help you find the plan that&#39;s
        right for you. Ensure you <br /> and your loved ones are protected.
      </p>
      <Button
        borderColor="border-VeryLightGray"
        bgColor=" hover:bg-VeryLightGray"
        color="text-VeryLightGray hover:text-VeryDarkViolet"
      >
        View plans
      </Button>
      {/* pattern */}
      <div className=" absolute -left-10 top-[100%] max-md:top-0">
        <img src={PatternDesktop} alt="pattern" className=" max-md:hidden" />
        <img
          src={PatternMobile}
          alt="pattern"
          className=" hidden max-md:block"
        />
      </div>
    </motion.aside>
  );
};

export default Info;
