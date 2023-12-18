import React from "react";

const Line = ({
  width = "w-[25%]",
  color = "bg-VeryLightGray",
  className = "",
  ...props
}) => {
  return (
    <hr
      className={`    border-0 h-[2px] bg-opacity-75  ${width} ${color} ${className}`}
      {...props}
    />
  );
};

export default Line;
