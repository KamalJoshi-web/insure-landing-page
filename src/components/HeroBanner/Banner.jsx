import React from "react";
import Info from "./Info";
import Graphics from "./Graphics";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/animationVariants";
const Banner = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      custom={0.8}
      className="  px-10 relative z-10 flex justify-between gap-2 items-center  max-md:flex-col-reverse  bg-DarkViolet  "
    >
      <Info />
      <Graphics />
    </motion.div>
  );
};

export default Banner;
