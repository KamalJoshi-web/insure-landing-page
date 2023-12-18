import React from "react";

const LinkPath = ({ title, subLink }) => {
  const fontStyle =
    "font-BodyKarla font-extrabold uppercase tracking-widest text-sm max-md:text-center";

  return (
    <div>
      <h5 className={` ${fontStyle} text-DarkGrayishViolet mb-10 `}>{title}</h5>
      {subLink.map((item, index) => (
        <h6
          key={index}
          className={` ${fontStyle}  duration-300 text-DarkViolet my-3 hover:underline cursor-pointer `}
        >
          {item}
        </h6>
      ))}
    </div>
  );
};

export default LinkPath;
