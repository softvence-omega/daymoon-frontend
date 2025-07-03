import React, { ReactNode } from "react";

interface SellerHeader {
  children: ReactNode;
  className?: string;
}

const SellerHeader: React.FC<SellerHeader> = ({ children, className }) => {
  return (
    <h2
      className={`font-medium text-2xl sm:text-4xl lg:text-5xl leading-tight tracking-tight uppercase ${className}`}
    >
      {children}
    </h2>
  );
};

export default SellerHeader;
