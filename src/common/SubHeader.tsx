import React, { ReactNode } from "react";

interface SubHeader {
  children: ReactNode;
  className?: string;
}

const SubHeader: React.FC<SubHeader> = ({ children, className }) => {
  return <h2 className={`test-sm text-black/60  ${className}`}>{children}</h2>;
};

export default SubHeader;
