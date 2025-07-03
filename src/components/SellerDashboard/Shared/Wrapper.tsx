import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full  mx-auto h-full p-4 md:p-6">{children}</div>;
};

export default Wrapper;
