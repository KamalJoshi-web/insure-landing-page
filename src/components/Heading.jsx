import React from "react";

const Heading = ({
  children,
  color = "text-VeryLightGray",
  className = "",
  ...props
}) => {
  return (
    <h1
      className={`  font-HeadingDM text-6xl max-lg:text-5xl max-md:text-4xl max-md:text-center ${color} ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
