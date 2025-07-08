import React, { ReactNode } from "react";

interface DashboardSpaceBottom {
  children: ReactNode;
  className?: string;
}

const DashboardSpaceBottom: React.FC<DashboardSpaceBottom> = ({
  children,
  className,
}) => {
  return <div className={`pb-10 ${className}`}>{children}</div>;
};

export default DashboardSpaceBottom;
