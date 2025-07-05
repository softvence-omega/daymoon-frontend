import React, { ReactNode } from "react";

interface CommonHeader {
  children: ReactNode;
  className?: string;
}

const CommonHeader: React.FC<CommonHeader> = ({ children, className }) => {
  return (
    <h2 className={`text-xl text-jet-black font-medium ${className}`}>
      {children}
    </h2>
  );
};

export default CommonHeader;
