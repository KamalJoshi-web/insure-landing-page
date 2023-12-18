import React from "react";
import PCNav from "./PCNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/animationVariants";

const Navbar = () => {
  return (
    <motion.nav
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className=" relative py-5 bg-VeryLightGray  z-20  px-10 "
    >
      <PCNav />
      <MobileNav />
    </motion.nav>
  );
};

export default Navbar;
