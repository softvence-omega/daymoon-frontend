import React, { ReactNode, ComponentType } from "react";

interface ButtonWithIconProps {
  children: ReactNode;
  className?: string;
  icon?: ComponentType<{ className?: string }>;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  children,
  className,
  icon: Icon,
}) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-2xl font-medium text-base sm:text-lg transition border border-catalien-blue cursor-pointer ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export default ButtonWithIcon;
