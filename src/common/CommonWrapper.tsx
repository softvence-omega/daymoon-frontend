import React, { ReactNode } from "react";

// Define the props interface
interface CommonWrapperProps {
  children: ReactNode; // Type for children (can be any valid React node)
  className?: string; // Optional className prop
}

// Define the component
const CommonWrapper: React.FC<CommonWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`max-w-[1400px] mx-auto my-auto ${className} px-2 lg:px-0`}>
      {children}
    </div>
  );
};

export default CommonWrapper;
