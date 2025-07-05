import React, { ReactNode } from "react";

interface SellerHeader {
  children: ReactNode;
  className?: string;
}

const SellerHeader: React.FC<SellerHeader> = ({ children, className }) => {
  return (
    <h2
      className={`font-semibold text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl lg:leading-[57px] lg:tracking-[-.96px] uppercase ${className}`}
    >
      {children}
    </h2>
  );
};

export default SellerHeader;
