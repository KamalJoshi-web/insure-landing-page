import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" relative max-w-[1440px] mx-auto   overflow-x-clip">
      {children}
    </div>
  );
};

export default Container;
