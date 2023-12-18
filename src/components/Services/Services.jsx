import React from "react";
import { Heading, Line } from "../index";
import { details } from "./serviceDetails";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { zoomIn } from "../../animations/animationVariants";

const Services = () => {
  return (
    <motion.div
      variants={zoomIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className=" px-10 min-h-screen flex  justify-end flex-col gap-5"
    >
      <Line color="bg-DarkGrayishViolet" width="w-[10%]" />
      <Heading color="text-VeryDarkViolet">We’re different</Heading>
      {/* Cards */}
      <div className=" flex justify-between items-center mt-16 flex-wrap ">
        {details.map((item, index) => (
          <ServiceCard
            key={index}
            ind={index}
            icon={item.icon}
            title={item.name}
            info={item.det}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
