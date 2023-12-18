import React from "react";

const Button = ({
  children,
  type = "button",
  className = "",
  color = "text-DarkViolet hover:text-VeryLightGray",
  bgColor = "bg-opacity-0 hover:bg-DarkViolet",
  borderColor = "border-VeryDarkViolet",
  ...props
}) => {
  return (
    <button
      type={type}
      className={` z-10 duration-300 px-4 py-2 border-2  font-bold  uppercase text-sm tracking-[0.2em] font-BodyKarla ${color} ${bgColor} ${borderColor} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
