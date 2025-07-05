import React, { ReactNode } from "react";

interface CommonButton {
  children: ReactNode;
  className?: string;
}

const CommonButton: React.FC<CommonButton> = ({ children, className }) => {
  return (
    <button
      className={`px-4 sm:px-6 py-2 rounded-[20px] font-medium transition  bg-sunset-orange ext-lg text-white cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default CommonButton;
