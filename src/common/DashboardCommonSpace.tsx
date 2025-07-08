import React, { ReactNode } from "react";

interface DashboardCommonSpace {
  children: ReactNode;
  className?: string;
}

const DashboardCommonSpace: React.FC<DashboardCommonSpace> = ({
  children,
  className,
}) => {
  return <div className={`py-10 ${className}`}>{children}</div>;
};

export default DashboardCommonSpace;
