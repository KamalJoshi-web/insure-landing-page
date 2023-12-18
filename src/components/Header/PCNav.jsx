import React from "react";
import { Logo, Button } from "../index";
import { link, linkStyle } from "./links";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/animationVariants";

const PCNav = () => {
  return (
    <div className="  flex justify-between items-center max-sm:hidden">
      {/* Logo */}
      <Logo />
      {/* Links */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        custom={0.5}
        className=" flex gap-5 items-center"
      >
        {link.map((item, index) => (
          <div key={index}>
            <a
              href={item.path}
              className={` text-DarkGrayishViolet ${linkStyle}`}
            >
              {item.name}
            </a>
          </div>
        ))}
        <Button>View plans</Button>
      </motion.div>
    </div>
  );
};

export default PCNav;
