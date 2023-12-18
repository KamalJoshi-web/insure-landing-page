import React from "react";
import { motion } from "framer-motion";
import { zoomInStagger } from "../../animations/animationVariants";

const ServiceCard = ({ icon, info, title, ind }) => {
  return (
    <motion.div
      variants={zoomInStagger}
      initial="initial"
      whileInView="animate"
      custom={ind * 0.5}
      viewport={{ once: true }}
      className=" max-md:mx-auto max-w-xs w-full my-5 flex flex-col gap-5 items-start max-md:items-center "
    >
      <img src={icon} alt="icon" />
      <h2 className=" font-HeadingDM text-2xl text-VeryDarkViolet ">{title}</h2>
      <p className=" font-BodyKarla text-DarkGrayishViolet max-md:text-center ">
        {info}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
