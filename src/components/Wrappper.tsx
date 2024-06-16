import React from "react";

const Wrappper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1440px] w-[90%] mx-auto">{children}</div>;
};

export default Wrappper;
